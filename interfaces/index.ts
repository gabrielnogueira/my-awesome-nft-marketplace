export type ServerDataResponse<T> = {}

export interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  collectionId: number;
  favorites: number;
};

export type PaginatedResponse<T> = {
  skip: number;
  limit: number;
  total: number;
  count: number;
  query?: string;
  data: T
}

export type ServerError = {
  status: number;
  message: string;
};

