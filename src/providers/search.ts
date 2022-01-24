import { useState } from "react";
import { createContainer } from "unstated-next";
import { Item } from "../../interfaces";
import { useDataFetcher } from "../hooks/useDataFetcher";
import { getItems } from "../services/items";

//this provider is used to handle search state
//it will fetch for the items using dataFetcher hook

const useHook = () => {
  const [searchText, setSearchText] = useState("");

  const { data, more, isFetching, ended } = useDataFetcher<Item[]>(
    getItems(searchText)
  );

  return {
    searchText,
    setSearchText,
    data,
    isFetching: !data || isFetching,
    ended,
    more,
  };
};

const Search = createContainer(useHook);

export const SearchProvider = Search.Provider;
export const useSearch = Search.useContainer;
