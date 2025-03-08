export interface OrderQueryParams {
  pageSize: number;
  currentItem: number;

  orderBy?: string;
  branchIds?: number[];
  customerIds?: number[];
  customerCode?: string;
  status?: number[];
  includePayment?: boolean;
  includeOrderDelivery?: boolean;
  lastModifiedFrom?: Date;
  toDate?: Date;
  orderDirection?: string;
  createdDate?: Date;
  saleChannelId?: number;
}

export interface OrderListResponse {
  total: number;
  pageSize: number;
  data: [
    {
      id: number;
      code: string;
      purchaseDate: Date;
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
      modifiedDate: Date;
      createdDate: Date;
      SaleChannelId: number;
      PriceBookId: number;
      Extra: any;
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
        },
      ];
      SaleChannelName: string;
    },
  ];
}

export interface OrderDetailResponse {
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
    },
  ];
  SaleChannelName: string;
  invoices: [
    {
      invoiceId: number;
      invoiceCode: string;
      total: number;
      status: number;
    },
  ];
  SaleChannel: {
    IsNotDelete: true;
    Img: string;
    RetailerId: number;
    Position: number;
    IsActive: true;
    CreatedBy: number;
    CreatedDate: string;
    Id: number;
    Name: string;
  };
}

export interface OrderParamsPayload {
  isApplyVoucher: boolean;
  purchaseDate: Date;
  branchId: number;
  soldById: number;
  discount: number;
  description: string;
  totalPayment: number;
  saleChannelId: number;
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
    },
  ];
  orderDelivery?: {
    deliveryCode: string;
    price: number;
    receiver: string;
    contactNumber: string;
    address: string;
    locationName: string;
    wardName: string;
    partnerDelivery: {
      code: string;
      name: string;
    };
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
  Payments?: [
    {
      // Thêm phương thức thanh toán bằng voucher
      Method: string; // Giá trị mặc định là Voucher (không đổi)
      MethodStr: string; // Giá trị mặc định là Voucher (không đổi)
      Amount: number; // Giá trị của voucher
      Id: number; // Giá trị mặc định là -1 (không đổi)
      AccountId: null; // Giá trị mặc định là null (không đổi)
      VoucherId: number; // Id của voucher
      VoucherCampaignId: 30087; // Id của đợt phát hành voucher
    },
  ];
}
