import { useCallback, useEffect, useState } from "react";
import useSWR from "swr";

// this hook was created as a encapsulation for useSWR
// it will keep pagination state, request abortion, fetching flags
// the ideia is to be something flexible and deacopled from business logic
// so i created some contrats and we can inject services to fetch the data
// a good optimization on this is abstract pagination related states from this hook to keep it with single responsability

export type Pagination = {
  skip: number;
  limit: number;
};

export type SWRFetcherProps = {
  signal: AbortSignal;
  url: string;
};

export type SWRService<T> = {
  url: (pagination: Pagination) => string;
  query?: string;
  execute: (props: SWRFetcherProps) => Promise<T>;
};

export type SWRFetcher<T> = (fetcherProps: SWRFetcherProps) => SWRService<T>;

const useDataFetcher = <T>(
  service: SWRService<T>,
  callback?: (data: T) => void
) => {
  const [abortController, setAbortController] = useState<AbortController>();
  const [ended, setEnded] = useState<boolean>(false);
  const [result, setResult] = useState<T[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [isFetchingMore, setIsFetchingMore] = useState<boolean>(false);
  const [paging, setPaging] = useState<Pagination>({
    skip: 0,
    limit: 20,
  });

  useEffect(() => {
    if (service.query) {
      setIsFetching(true);
      setResult([]);
      setPaging({
        skip: 0,
        limit: 20,
      });
      setEnded(false);
    }
  }, [service.query]);

  const executeService = useCallback(
    async (url) => {
      if (abortController) {
        abortController.abort();
      }
      const abort = new AbortController();
      setAbortController(abort);

      const response: T = await service.execute({
        signal: abort.signal,
        url,
      });

      return response;
    },
    [abortController]
  );

  const { data, error } = useSWR<T>(service.url(paging), (url) =>
    executeService(url)
  );

  useEffect(() => {
    if (data) {
      setResult((r) => {
        const newR = [...r];
        newR.push(data);

        if (newR.flat(1).length < paging.skip + paging.limit) {
          setEnded(true);
        }

        return newR;
      });
      setIsFetching(false);
      setIsFetchingMore(false);
    }
  }, [data]);

  useEffect(() => {
    if (callback) {
      callback(data);
    }
  }, [data]);

  const more = async () => {
    if (isFetching || isFetchingMore || ended) {
      return null;
    }
    setIsFetching(false);
    setIsFetchingMore(true);

    setPaging((p) => ({ ...p, skip: result.flat(1).length }));
  };

  if (error && error.message !== "canceled") {
    throw new Error(error);
  }

  return {
    data: result.flat(1),
    error,
    more,
    ended,
    isFetching,
  };
};

export { useDataFetcher };
