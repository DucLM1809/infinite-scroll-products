import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { common, endpoints } from "@/constants";
import { ApiResponse } from "@/types/response";
import { Product } from "@/types/products";
import qs from "query-string";

const { DEFAULT_PAGING } = common;

interface Props {
  q: string;
}

const useInfiniteProducts = ({ q }: Props) => {
  return useInfiniteQuery({
    queryKey: ["products", q],
    queryFn: async ({
      pageParam,
      queryKey,
    }: {
      pageParam: { skip: number; limit: number };
      queryKey: string[];
    }) => {
      const url = qs.stringifyUrl({
        url: endpoints.productEndpoints.productsSearch,
        query: { ...pageParam, q: queryKey[1] },
      });
      try {
        const apiResponse = await axios.get(url);

        return apiResponse.data as ApiResponse<"products", Product>;
      } catch (error) {
        throw new Error("Error fetching products");
      }
    },
    initialPageParam: {
      skip: DEFAULT_PAGING.SKIP,
      limit: DEFAULT_PAGING.LIMIT,
    },
    getNextPageParam: (lastPage) => {
      if (lastPage.skip + lastPage.limit >= lastPage.total) {
        return undefined;
      }

      return {
        skip: lastPage.skip + lastPage.limit,
        limit: lastPage.limit,
      };
    },
  });
};

export default {
  useInfiniteProducts,
};
