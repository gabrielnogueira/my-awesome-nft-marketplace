import axios from "axios";
import { Item, PaginatedResponse } from "../../interfaces";
import { SWRFetcherProps, SWRService } from "../hooks/useDataFetcher";

export const getItems = (): SWRService<PaginatedResponse<Item[]>> => {
  let url = `/api/items`;

  return {
    url,
    execute: async ({ signal, query, pagination }: SWRFetcherProps) => {
      let apiUrl = `${url}?q=${query}`;

      if (pagination) {
        const { skip, limit } = pagination;
        apiUrl += `?skip=${skip}&limit=${limit}`;
      }
      const response = await axios.get(apiUrl, {
        signal,
      });

      const data: PaginatedResponse<Item[]> = response.data;

      return data;
    },
  };
};

export const getTrendingItems = (): SWRService<PaginatedResponse<Item[]>> => {
  let url = `/api/items/trending`;

  return {
    url,
    execute: async ({ signal, query, pagination }: SWRFetcherProps) => {
      let apiUrl = url;

      if (pagination) {
        const { skip, limit } = pagination;
        apiUrl += `?skip=${skip}&limit=${limit}`;
      }
      const response = await axios.get(apiUrl, {
        signal,
      });

      const data: PaginatedResponse<Item[]> = response.data;

      return data;
    },
  };
};

export const getRelatedItems = async ({
  signal,
  query = "",
  pagination,
}: SWRFetcherProps): Promise<PaginatedResponse<Item[]>> => {
  let url = `/api/items/${query}/related`;

  if (pagination) {
    const { skip, limit } = pagination;
    url += `?skip=${skip}&limit=${limit}`;
  }

  const response = await axios.get(url, {
    signal,
  });

  return response.data;
};

export const getItem = async (id: string): Promise<Item> => {
  let url = `/api/items/${id}`;

  const response = await axios.get(url);

  return response.data;
};
