import { useEffect, useState } from "react";
import { createContainer } from "unstated-next";
import { Item } from "../../interfaces";
import { useDataFetcher } from "../hooks/useDataFetcher";
import { getItems } from "../services/items";

const useHook = () => {
  const [searchText, setSearchText] = useState("");
  const { data, more, isFetching, ended } = useDataFetcher<Item[]>(
    getItems,
    searchText,
  );

  return { searchText, setSearchText, data, isFetching: !data || isFetching, ended, more };
};

const Search = createContainer(useHook);

export const SearchProvider = Search.Provider;
export const useSearch = Search.useContainer;
