import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  id: number;

  @Prop()
  code: string;

  @Prop()
  email: string;

  @Prop()
  name: string;

  @Prop({ required: true, default: 'member' })
  role: 'member' | 'admin';

  @Prop()
  password: string;

  @Prop()
  avatar: string;

  @Prop()
  gender: 'male' | 'female';

  @Prop()
  birthdate: Date;

  @Prop()
  createdDate: Date;

  @Prop()
  modifiedDate: Date;

  @Prop()
  locationName: string;

  @Prop()
  address: string;

  @Prop()
  contactNumber: string;

  // @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ticket' }] })
  // tickets: [];
}

export const UserSchema = SchemaFactory.createForClass(User);
