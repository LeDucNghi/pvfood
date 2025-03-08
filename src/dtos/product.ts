export interface Product {
  createdDate: Date;
  masterCode: string;
  id: number;
  retailerId: number;
  code: string;
  name: string;
  fullName: string;
  categoryId: number;
  categoryName: string;
  allowsSale: boolean;
  type: number;
  hasVariants: boolean;
  basePrice: number;
  weight: number;
  conversionValue: 1;
  description: string;
  modifiedDate: string;
  isActive: boolean;
  isRewardPoint: boolean;
  inventories: [Inventory];
  images: [string];
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
