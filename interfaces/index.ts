//shared interfaces between client and server

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

//not used yet. the ideia is to have a clear contract
//between server and client for errors so we can handle it 
//in a better way. for now errors are not handled. any issue will 
//be handled by error boundary
export type ServerError = {
  status: number;
  message: string;
};

