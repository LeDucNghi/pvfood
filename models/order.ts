import { Product } from "./product";

export interface OrderParamsPayload {
  isApplyVoucher: boolean;
  purchaseDate: string;
  branchId: number;
  soldById: number;
  discount: number;
  description: string;
  totalPayment: number; //khách đã trả
  saleChannelId: number; // Id kênh bán hàng, nếu không truyền mặc định kênh khác, 348931 - shopee / 359252 - website
  orderDetails: [
    {
      productId: number;
      productCode: string;
      productName: string;
      quantity: number;
      price: number;
      discount: number;
      discountRatio: number;
      viewDiscount: number;
      isMaster: true;
      note: string;
    }
  ];
  orderDelivery: {
    deliveryCode: number;
    price: number;
    receiver: string;
    contactNumber: string;
    address: string;
    locationName: string;
    wardName: string;
  };
  customer?: {
    id: number;
    code: string;
    name: string;
    gender: boolean;
    contactNumber: string;
    address: string;
    wardName: string;
    email: string;
  };
}
export interface OrderListResponse {
  id: number;
  code: string;
  purchaseDate: string;
  branchId: number;
  branchName: string;
  soldById: number;
  soldByName: string;
  customerId: number;
  customerCode: string;
  customerName: string;
  total: number;
  totalPayment: number;
  status: number;
  statusValue: string;
  retailerId: number;
  description: string;
  usingCod: true;
  modifiedDate: string;
  createdDate: string;
  orderDelivery: {
    serviceType: string;
    status: number;
    statusValue: string;
    price: number;
    receiver: string;
    contactNumber: string;
    address: string;
    locationId: number;
    locationName: string;
    wardName: string;
    partnerDeliveryId: number;
    partnerDelivery: {
      code: string;
      name: string;
    };
    latestStatus: number;
  };
  SaleChannelId: number;
  PriceBookId: number;
  Extra: string;
  orderDetails: Product[];
  SaleChannelName: string;
}
export interface OrderDetailResponse {}
