import { Product, ProductList, ProductListQueryParams } from "@/models";

import axiosClient from "./axios-client";

export const orderService = {
  getOrderDetail(query: Partial<ProductListQueryParams>): Promise<ProductList> {
    return axiosClient.get(
      `/order/getProductList/?orderBy=${query.orderBy}&pageSize=20&currentItem=${query.currentItem}`
    );
  },

  order(id: string): Promise<Product> {
    return axiosClient.get(`/order/${id}`);
  },
};
