import axios from "axios";
import { Item, PaginatedResponse } from "../../interfaces";
import { SWRFetcherProps, SWRService } from "../hooks/useDataFetcher";

export const getItem = (id: string): SWRService<Item> => {
  return {
    url: (pagination) => {
      return `/api/items/${id}`;
    },
    execute: async ({ signal, url }: SWRFetcherProps) => {
      const { data } = await axios.get(url);

      return data;
    },
  };
};

export const getItems = (query: string): SWRService<Item[]> => {
  let url = `/api/items`;

  return {
    url: (pagination) => {
      let apiUrl = `${url}?q=${query}`;
      if (pagination) {
        const { skip, limit } = pagination;
        apiUrl += `&skip=${skip}&limit=${limit}`;
      }

      return apiUrl;
    },
    query: query,
    execute: async ({ signal, url }: SWRFetcherProps) => {
      const response = await axios.get(url, {
        signal,
      });

      const pageWrapper: PaginatedResponse<Item[]> = response.data;

      return pageWrapper.data;
    },
  };
};

export const getTrendingItems = (): SWRService<Item[]> => {
  let url = `/api/items/trending`;

  return {
    url: (pagination) => {
      let apiUrl = url;
      if (pagination) {
        const { skip, limit } = pagination;
        apiUrl += `?skip=${skip}&limit=${limit}`;
      }

      return apiUrl;
    },
    execute: async ({ signal, url }: SWRFetcherProps) => {
      const response = await axios.get(url, {
        signal,
      });

      const pageWrapper: PaginatedResponse<Item[]> = response.data;

      return pageWrapper.data;
    },
  };
};

export const getRelatedItems = (id: string): SWRService<Item[]> => {
  let url = `/api/items/${id}/related`;

  return {
    url: (pagination) => {
      let apiUrl = url;
      if (pagination) {
        const { skip, limit } = pagination;
        apiUrl += `?skip=${skip}&limit=${limit}`;
      }
      return apiUrl;
    },
    execute: async ({ signal, url }: SWRFetcherProps) => {
      const response = await axios.get(url, {
        signal,
      });

      const pageWrapper: PaginatedResponse<Item[]> = response.data;

      return pageWrapper.data;
    },
  };
};
