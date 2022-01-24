import { useCallback, useEffect, useState } from "react";
import useSWR from "swr";
import { PaginatedResponse } from "../../interfaces";

export type Pagination = {
  skip: number;
  limit: number;
};

export type SWRFetcherProps = {
  signal: AbortSignal;
  query?: string;
  pagination?: Pagination;
};

export type SWRService<T> = {
  url: string;
  execute: (props: SWRFetcherProps) => Promise<T>;
};

export type SWRFetcher<T> = (fetcherProps: SWRFetcherProps) => SWRService<T>;

const useDataFetcher = <T>(
  service: SWRService<T>,
  query?: string,
  callback?: (data: T) => void
) => {
  const [abortController, setAbortController] = useState<AbortController>();
  const [ended, setEnded] = useState<boolean>(false);
  const [result, setResult] = useState<T[]>([]);
  const [isFetchingMore, setIsFetchingMore] = useState<boolean>(false);
  const [paging, setPaging] = useState<Pagination>({
    skip: 0,
    limit: 20,
  });

  const executeService = useCallback(
    async (skip, limit) => {
      if (abortController) {
        abortController.abort();
      }
      const abort = new AbortController();
      setAbortController(abort);

      const response: T = await service.execute({
        signal: abort.signal,
        query: query,
        pagination: { skip, limit },
      });

      return response;
    },
    [query, abortController]
  );

  const { data, error } = useSWR<T>(service.url, () =>
    executeService(paging.skip, paging.limit)
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
      setIsFetchingMore(false);
    }
  }, [data]);

  const isFetching = (!result || result.length === 0) && !data && !error;

  useEffect(() => {
    if (callback) {
      callback(data);
    }
  }, [data]);

  const more = async () => {
    if (isFetching || isFetchingMore || ended) {
      return null;
    }
    setIsFetchingMore(true);

    setPaging((p) => ({ ...p, skip: result.flat(1).length }));
  };

  return {
    data: result.flat(1),
    error,
    fetch,
    more,
    ended,
    isFetching,
  };
};

export { useDataFetcher };
