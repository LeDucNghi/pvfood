import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SignUpPayload } from 'src/dtos';
import { User } from 'src/schemas/user.schema';
import { KiotvietService } from './kiotviet.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private kiotService: KiotvietService,
  ) {}

  async findOne(email: string): Promise<User | undefined> {
    const userInDb = await this.userModel.findOne({ email: email });

    return userInDb;
  }

  async create(params: SignUpPayload): Promise<User> {
    try {
      const kiotUser = await this.kiotService.createNewUser(params);

      if (kiotUser) {
        const createdUser = new this.userModel({
          id: kiotUser.data.id,
          code: kiotUser.data.code,
          email: params.email,
          name: params.name,
          password: params.password,
          address: params.address,
          contactNumber: params.contactNumber,
          gender: params.gender,
          locationName: params.locationName,
          wardName: params.wardName,

          avatar: '',
          role: 'member',

          retailerId: 500345979,
          branchId: 417299,
          modifiedDate: new Date(),
          createdDate: new Date(),
          type: 0,
          organization: '',
          taxCode: '',
          comments: '',
          debt: 0,
          totalInvoiced: 0,
          totalRevenue: 0,
          totalPoint: 0,
          rewardPoint: 0,
        });

        await createdUser.save();

        return createdUser;
      }
    } catch (error) {
      console.log('🚀 ~ UsersService ~ create ~ error:', error);
    }
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
