import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  invoiceId: number;
  deliveryBy: number;
  deliveryCode: string;
  serviceType: number;
  serviceTypeText: string;
  status: number;
  statusValue: string;
  price: number;
  receiver: string;
  contactNumber: number;
  address: string;
  locationId: number;
  locationName: string;
  wardId: number;
  wardName: string;
  usingPriceCod: true;
  partnerDelivery: {
    code: string;
    name: string;
  };
}

export const UserSchema = SchemaFactory.createForClass(User);
