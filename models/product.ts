import { User } from "./auth";

export interface Product {
  id: number;
  createdDate?: Date;
  masterCode?: string;
  retailerId?: number;
  code?: string;
  name?: string;
  fullName?: string;
  categoryId?: number;
  categoryName?: string;
  allowsSale?: boolean;
  type?: number;
  hasVariants?: boolean;
  basePrice?: number;
  weight?: number;
  conversionValue?: 1;
  description?: string;
  modifiedDate?: string;
  isActive?: boolean;
  isRewardPoint?: boolean;
  inventories?: [Inventory];
  images?: [string];
  quantity?: number;
  price?: number;
  tags?: [Tag];
  comments?: [Comments];
}

export interface Inventory {
  productId: number;
  branchId: number;
  branchName: string;
  cost: number;
  onHand: number;
  reserved: number;
  actualReserved: number;
  minQuantity: number;
  maxQuantity: number;
  isActive: boolean;
}

export interface ProductList {
  total: number;
  pageSize: number;
  data: Product[];
}
export interface Tag {
  id: string;
  tag: string;
}

export interface Comments {
  id: string;
  user: User;
  comment: string;
  images?: string[];
  rate: number;
  date: Date;
}

export interface CartState {
  cart: {
    total: number;
    subtotal: number;
    discount: number;
    items: Product[];
  };
}

export interface CommentPayload {
  comment: string;
  rate: number;
  username: string;
  email: string;
}

export interface CheckoutPayload {
  firstname: string;
  lastname: string;
  email: string;
  district: string;
  country: string;
  phone: string;
  address: string;
  note?: string;
}

export interface ProductListQueryParams {
  orderBy: string;
  pageSize: number;
  currentItem: number;
  includeInventory?: boolean;
  includePricebook?: boolean;
  IncludeSerials?: boolean;
  IncludeBatchExpires?: boolean;
  includeWarranties?: boolean;
  includeRemoveIds?: boolean;
  includeQuantity?: boolean;
  productType?: boolean;
  includeMaterial?: boolean;
  isActive?: boolean;
  includeSoftDeletedAttribute?: boolean;
}
