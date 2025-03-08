import * as bcrypt from 'bcrypt';

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SignInPayload, SignUpPayload, User } from 'src/dtos';

import { JwtService } from '@nestjs/jwt';
import { UsersService } from './users.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn({ email, password }: SignInPayload) {
    try {
      const existedUser = await this.usersService.findOne(email);

      if (!existedUser) {
        throw new HttpException('User not found 🤔', HttpStatus.NOT_FOUND);
      } else {
        await this.verifyPassword(password, existedUser.password);

        const token = await this.generateToken(existedUser);

        return token;
      }
    } catch (error) {
      console.log('🚀 ~ AuthService ~ signIn ~ error:', error);

      throw new HttpException(
        'Wrong password or email!',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async signUp(params: SignUpPayload): Promise<User> {
    try {
      const user = await this.usersService.findOne(params.email);
      const hashedPwd = await bcrypt.hash(params.password, 10);

      params.password = hashedPwd;

      if (user) {
        throw new HttpException(
          'This user already existed 🤔',
          HttpStatus.BAD_REQUEST,
        );
      } else {
        const newUser = await this.usersService.create({
          email: params.email,
          name: params.name,
          password: params.password,
          address: params.address,
          contactNumber: params.contactNumber,
          gender: params.gender,
          locationName: params.locationName,
          wardName: params.wardName,
        });

        return newUser;
      }
    } catch (error) {
      console.log('🚀 ~ AuthService ~ signUp ~ error:', error);
      throw new HttpException('Something went wrong!', HttpStatus.BAD_REQUEST);
    }
  }

  async getUserProfile(id: string) {
    try {
      const user = await this.usersService.findOne(id);
      return user;
    } catch (error) {
      console.log('🚀 ~ AuthService ~ getUserProfile ~ error:', error);
    }
  }

  async verifyPassword(signInPwd: string, storedPwd: string) {
    const isPasswordMatching = await bcrypt.compare(signInPwd, storedPwd);

    if (!isPasswordMatching) {
      throw new HttpException(
        'Wrong password or email!',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async generateToken(user: User): Promise<string> {
    const payload = {
      uuid: uuidv4(),

      id: user.id,
      code: user.code,
      email: user.email,
      name: user.name,
      role: 'member',
      avatar: user.avatar,
      gender: user.gender,
      createdDate: user.createdDate,
      modifiedDate: user.modifiedDate,
      locationName: user.locationName,
      address: user.address,
      contactNumber: user.contactNumber,

      orders: user.order,
      retailerId: user.retailerId,
      branchId: user.branchId,
      wardName: user.wardName,
      type: 0,
      organization: '',
      taxCode: '',
      comments: '',
      debt: 0,
      totalInvoiced: 0,
      totalRevenue: 0,
      totalPoint: 0,
      rewardPoint: 0,
    };

    const token = await this.jwtService.signAsync(payload);

    return token;
  }
}
