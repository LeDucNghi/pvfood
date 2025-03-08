import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { AxiosRequestConfig } from 'axios';
import { Model } from 'mongoose';
import { lastValueFrom } from 'rxjs';
import {
  KiotParamsPayload,
  KiotVietTokenPayload,
  OrderDetailResponse,
  OrderListResponse,
  OrderParamsPayload,
  OrderQueryParams,
  ProductListQueryParams,
} from 'src/dtos';
import { KiotVietToken } from 'src/schemas/kiotviet-token.schema';

@Injectable()
export class KiotvietService {
  constructor(
    @InjectModel(KiotVietToken.name) private tokenModel: Model<KiotVietToken>,

    private readonly axios: HttpService,
    private readonly configService: ConfigService,
    private jwtService: JwtService,
  ) {}

  async generateKiotvietToken(): Promise<KiotVietTokenPayload> {
    const clientId = this.configService.get('KIOTVIET_CLIENT_ID');
    const clientSecret = this.configService.get('KIOTVIET_CLIENT_SECRET');
    const grandType = this.configService.get('KIOTVIET_GRAND_TYPE');

    try {
      const data = {
        scopes: 'PublicApi.Access',
        grant_type: grandType,
        client_id: clientId,
        client_secret: clientSecret,
      };

      const headers: AxiosRequestConfig = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      };

      const kiotVietToken = await this.tokenModel.findOne({
        prefix: 'kiotviet',
      });

      if (kiotVietToken) {
        // check if token is valid

        const isExpire = Date.now() - kiotVietToken.createdDate > 3600000;

        if (isExpire) {
          // true
          // refresh token
          // else continue return old token
          console.log('🚀 return refresh token ');

          const res = await lastValueFrom(
            this.axios.post(
              'https://id.kiotviet.vn/connect/token',
              data,
              headers,
            ),
          );
          await this.tokenModel.findOneAndUpdate(
            { _id: kiotVietToken._id },
            {
              access_token: res.data.access_token,
              createdDate: Date.now(),
            },
            { new: true },
          );

          await kiotVietToken.save();

          return res.data;
        } else {
          const decodedToken = this.jwtService.decode(
            kiotVietToken.access_token,
          );

          console.log('🚀 return old token ');

          return decodedToken;
        }
      } else {
        console.log('🚀 create new token ');

        const res = await lastValueFrom(
          this.axios.post(
            'https://id.kiotviet.vn/connect/token',
            data,
            headers,
          ),
        );

        const payload = {
          access_token: res.data.access_token,
          clientId: res.data.clientId,
          clientSecret: res.data.clientSecret,
          token_type: res.data.token_type,
          scope: res.data.scope,
          expires_in: res.data.expires_in,
          createdDate: Date.now(),
          prefix: 'kiotviet',
          service: 'kiotviet',
        };

        const token = await this.jwtService.signAsync(payload);

        const newToken = new this.tokenModel({
          ...payload,
          access_token: token,
        });

        await newToken.save();

        return res.data;
      }
    } catch (error: any) {
      console.log('🚀 ~ AuthService ~ error:', error);

      throw new HttpException(
        `${error.response.data.error}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async createNewUser(payload: KiotParamsPayload) {
    try {
      const kiotvietToken = await this.generateKiotvietToken();

      const data = {
        code: '',
        name: payload.name, // Tên khách hàng
        gender: payload.gender === 'Nam' ? true : false, // Giới tính (true: nam, false: nữ)
        contactNumber: payload.contactNumber, // Số điện thoại khách hàng
        address: payload.address, // Địa chỉ khách hàng
        locationName: payload.locationName, // Khu vực
        wardName: payload.wardName, // Phường xã
        email: payload.email, // Email của khách hàng
        comments: '', // Ghi chú
        branchId: 417299, // ID chi nhánh tạo khách hàng
      };

      const res = await lastValueFrom(
        this.axios.post(`https://public.kiotapi.com/customers`, data, {
          headers: {
            Retailer: 'pvfood',
            Authorization: `Bearer ${kiotvietToken.access_token}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }),
      );

      return res.data;
    } catch (error) {
      console.log('🚀 ~ KiotvietService ~ createNewUser ~ error:', error);
    }
  }

  async getUser(id: number) {
    try {
      const kiotvietToken = await this.generateKiotvietToken();

      const res = await lastValueFrom(
        this.axios.get(`https://public.kiotapi.com/customers/${id}`, {
          headers: {
            Retailer: 'pvfood',
            Authorization: `Bearer ${kiotvietToken.access_token}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }),
      );

      return res.data;
    } catch (error) {
      console.log('🚀 ~ KiotvietService ~ getUser ~ error:', error);
    }
  }

  async findProduct(id: string) {
    try {
      const kiotvietToken = await this.generateKiotvietToken();

      const res = await lastValueFrom(
        this.axios.get(`https://public.kiotapi.com/products/${id}`, {
          headers: {
            Retailer: 'pvfood',
            Authorization: `Bearer ${kiotvietToken.access_token}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }),
      );

      return res.data;
    } catch (error) {
      console.log('🚀 ~ ProductService ~ getAllProduct ~ error:', error);
      throw new HttpException(
        `${error.response.data.error}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async getAllProduct(query: ProductListQueryParams) {
    try {
      const kiotvietToken = await this.generateKiotvietToken();

      const res = await lastValueFrom(
        this.axios.get(
          `https://public.kiotapi.com/products?orderBy=${query.orderBy}&pageSize=20&currentItem=${query.currentItem}&isActive=true`,
          {
            headers: {
              Retailer: 'pvfood',
              Authorization: `Bearer ${kiotvietToken.access_token}`,
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          },
        ),
      );

      return res.data;
    } catch (error) {
      console.log('🚀 ~ ProductService ~ getAllProduct ~ error:', error);
      throw new HttpException(
        `${error.response.data.error}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async handleOrder(params: OrderParamsPayload) {
    const kiotvietToken = await this.generateKiotvietToken();

    const data = {
      isApplyVoucher: params.isApplyVoucher ? params.isApplyVoucher : false, //Có apply voucher khi tạo đặt hàng không
      purchaseDate: params.purchaseDate,
      branchId: 417299,
      soldById: 573722,
      discount: 0,
      description: 'Đơn hàng tạo ảo từ đơn Postman, người mua Đức Nghị',
      totalPayment: 0,
      saleChannelId: 359252,
      makeInvoice: true,
      orderDetails: params.orderDetails,
      orderDelivery: params.orderDelivery,
      customer: params.customer ? params.customer : null,
    };

    try {
      const res = await lastValueFrom(
        this.axios.post(`https://public.kiotapi.com/orders`, data, {
          headers: {
            Retailer: 'pvfood',
            Authorization: `Bearer ${kiotvietToken.access_token}`,
            Partner: 'MyKiot',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }),
      );

      return res.data;
    } catch (error) {
      console.log('🚀 ~ ProductService ~ getAllProduct ~ error:', error);
      throw new HttpException(
        `${error.response.data.error}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  async getOrderList(query: OrderQueryParams): Promise<OrderListResponse> {
    const kiotvietToken = await this.generateKiotvietToken();

    try {
      const res = await lastValueFrom(
        this.axios.get(
          `https://public.kiotapi.com/orders?orderBy=${query.orderBy}&pageSize=20&currentItem=${query.currentItem}`,
          {
            headers: {
              Retailer: 'pvfood',
              Authorization: `Bearer ${kiotvietToken.access_token}`,
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          },
        ),
      );

      return res.data;
    } catch (error) {
      console.log('🚀 ~ ProductService ~ getOrderList ~ error:', error);
      throw new HttpException(
        `${error.response.data.error}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  async getOrderDetail(id: string): Promise<OrderDetailResponse> {
    const kiotvietToken = await this.generateKiotvietToken();

    try {
      const res = await lastValueFrom(
        this.axios.get(`https://public.kiotapi.com/orders/${id}`, {
          headers: {
            Retailer: 'pvfood',
            Authorization: `Bearer ${kiotvietToken.access_token}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }),
      );

      return res.data;
    } catch (error) {
      console.log('🚀 ~ ProductService ~ getAllProduct ~ error:', error);
      throw new HttpException(
        `${error.response.data.error}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
