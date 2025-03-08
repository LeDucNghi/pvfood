import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  IsNotDelete: boolean;
  Img: string;
  RetailerId: number;
  Position: number;
  IsActive: boolean;
  CreatedBy: number;
  CreatedDate: string;
  Id: number;
  Name: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
