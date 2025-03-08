import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { HydratedDocument } from 'mongoose';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class OrderDelivery {
  @Prop()
  serviceType: string;

  @Prop()
  status: number;

  @Prop()
  price: number;

  @Prop()
  receiver: string;

  @Prop()
  contactNumber: string;

  @Prop()
  address: string;

  @Prop()
  locationId: number;

  @Prop()
  locationName: string;

  @Prop()
  wardName: string;

  @Prop()
  latestStatus: number;
}

@Schema()
export class OrderDetail {
  @Prop()
  productId: number;

  @Prop()
  productCode: string;

  @Prop()
  productName: string;

  @Prop()
  quantity: number;

  @Prop()
  price: number;

  @Prop()
  discount: number;

  @Prop()
  discountRatio: number;

  @Prop()
  viewDiscount: number;
}

@Schema()
export class OrderInvoice {
  @Prop()
  invoiceId: number;

  @Prop()
  invoiceCode: string;

  @Prop()
  total: number;

  @Prop()
  status: number;
}

@Schema()
export class Order {
  @Prop()
  id: number;

  @Prop()
  code: string;

  @Prop()
  purchaseDate: string;

  @Prop()
  branchId: number;

  @Prop()
  branchName: string;

  @Prop()
  soldById: number;

  @Prop()
  soldByName: string;

  @Prop()
  customerId: number;

  @Prop()
  customerCode: string;

  @Prop()
  customerName: string;

  @Prop()
  total: number;

  @Prop()
  totalPayment: number;

  @Prop()
  status: number;

  @Prop()
  statusValue: string;

  @Prop()
  retailerId: number;

  @Prop()
  description: string;

  @Prop()
  usingCod: true;

  @Prop()
  modifiedDate: string;

  @Prop()
  createdDate: string;

  @Prop()
  orderDelivery: OrderDelivery;

  @Prop()
  SaleChannelId: number;

  @Prop()
  PriceBookId: number;

  @Prop()
  Extra: string;

  @Prop()
  orderDetails: OrderDetail[];

  @Prop()
  SaleChannelName: string;

  @Prop()
  invoices: OrderInvoice[];
}

export const OrderSchema = SchemaFactory.createForClass(Order);
