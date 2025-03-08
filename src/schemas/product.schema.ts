import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

import { Inventory } from './inventory.schema';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop()
  createdDate: Date;

  @Prop()
  masterCode: string;

  @Prop()
  id: number;

  @Prop()
  retailerId: number;

  @Prop()
  code: string;

  @Prop()
  name: string;

  @Prop()
  fullName: string;

  @Prop()
  categoryId: number;

  @Prop()
  categoryName: string;

  @Prop()
  allowsSale: boolean;

  @Prop()
  type: number;

  @Prop()
  hasVariants: boolean;

  @Prop()
  basePrice: number;

  @Prop()
  weight: number;

  @Prop()
  conversionValue: 1;

  @Prop()
  description: string;

  @Prop()
  modifiedDate: string;

  @Prop()
  isActive: boolean;

  @Prop()
  isRewardPoint: boolean;

  @Prop()
  images: [string];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Inventory' }] })
  inventories: Inventory[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
