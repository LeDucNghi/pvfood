import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { HydratedDocument } from 'mongoose';

export type InventoryDocument = HydratedDocument<Inventory>;

@Schema()
export class Inventory {
  @Prop()
  productId: number;

  @Prop()
  branchId: number;

  @Prop()
  branchName: string;

  @Prop()
  cost: number;

  @Prop()
  onHand: number;

  @Prop()
  reserved: number;

  @Prop()
  actualReserved: number;

  @Prop()
  minQuantity: number;

  @Prop()
  maxQuantity: number;

  @Prop()
  isActive: boolean;
}

export const InventorySchema = SchemaFactory.createForClass(Inventory);
