import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {
  OrderDetailResponse,
  OrderParamsPayload,
  OrderQueryParams,
} from 'src/dtos/order';

import { KiotvietService } from './kiotviet.service';

@Injectable()
export class OrderService {
  constructor(private kiotvietService: KiotvietService) {}

  async getOrderList(query: OrderQueryParams) {
    if (!query) {
      throw new HttpException(`Something is missing!!`, HttpStatus.BAD_REQUEST);
    }

    const orderList = await this.kiotvietService.getOrderList(query);

    return orderList;
  }

  async getOrderDetail(id: string) {
    if (!id) {
      throw new HttpException(`Something is missing!!`, HttpStatus.BAD_REQUEST);
    }

    const orderList = await this.kiotvietService.getOrderDetail(id);

    return orderList as OrderDetailResponse;
  }

  async handleOrder(params: OrderParamsPayload) {
    await this.kiotvietService.handleOrder(params);
  }
}
