import { Product, ProductList, ProductListQueryParams } from "@/models";

import axiosClient from "./axios-client";

export const productService = {
  getProductList(query: Partial<ProductListQueryParams>): Promise<ProductList> {
    return axiosClient.get(
      `/product/getProductList/?orderBy=${query.orderBy}&pageSize=20&currentItem=${query.currentItem}`
    );
  },

  getProduct(id: string): Promise<Product> {
    return axiosClient.get(`/product/${id}`);
  },
};
