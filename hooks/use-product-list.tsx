import useSWR, { SWRConfiguration } from "swr";

import { ProductListQueryParams } from "@/models";
import { QueryKeys } from "@/constants";
import { productService } from "@/app/lib/api";

export interface IuseProductProps {
  params?: Partial<ProductListQueryParams>;

  options?: SWRConfiguration;
}

export function useProductList({
  params = {
    currentItem: 0,
    orderBy: "Name",
    pageSize: 20,
  },
  options,
}: IuseProductProps) {
  const swrResponse = useSWR(
    // passed params with key
    // when params change, it will call API again
    [QueryKeys.GET_PRODUCT_LIST, params],
    () => productService.getProductList(params),
    {
      dedupingInterval: 30 * 1000, // 30s
      keepPreviousData: true,

      // first value before fetching data from API
      fallbackData: {
        data: [],
        total: 668,
        pageSize: 20,
      },

      // another configuration
      ...options,
    }
  );

  return swrResponse;
}
