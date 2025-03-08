import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { HydratedDocument } from 'mongoose';

export type KiotVietTokenDocument = HydratedDocument<KiotVietToken>;

@Schema()
export class KiotVietToken {
  @Prop({ required: true })
  access_token: string;

  @Prop()
  clientId: string;

  @Prop()
  clientSecret: string;

  @Prop()
  token_type: 'Bearer';

  @Prop()
  scope: string;

  @Prop({ required: true })
  expires_in: number;

  @Prop()
  createdDate: number;

  @Prop()
  prefix: string;

  @Prop()
  service: string;
}

export const KiotVietTokenSchema = SchemaFactory.createForClass(KiotVietToken);
