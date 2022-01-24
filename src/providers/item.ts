import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDataFetcher } from "src/hooks/useDataFetcher";
import { createContainer } from "unstated-next";
import { Item } from "../../interfaces";
import { getItem } from "../services/items";
import { useSearch } from "./search";

const useHook = () => {
  const [selectedItem, setSelectedItem] = useState<Item>();
  const [itemId, setItemId] = useState<string>();
  const { setSearchText } = useSearch();
  const router = useRouter();

  const { data, error, isFetching } = useDataFetcher<Item>(getItem(itemId));

  const onSelectItem = (item: Item) => {
    setSearchText("");
    setSelectedItem(()=>item);
    console.log({item});
    const url = `/items/${item.id}`;
    if (router.pathname !== url) {
      router.push(`/items/${item.id}`);
    }
  };

  useEffect(() => {
    if (
      router.pathname == "/items/[id]" &&
      router.pathname !== router.asPath &&
      !selectedItem
    ) {
      const { id } = router.query;
      setItemId(id.toString());
    }
  }, [router.pathname, router.asPath]);

  useEffect(() => {
    if (data && data.length > 0) {
      setSelectedItem(data[0]);
    }
  }, [data]);

  return { selectedItem, setSelectedItem: onSelectItem };
};

const ItemContainer = createContainer(useHook);

export const ItemProvider = ItemContainer.Provider;
export const useSelectedItem = ItemContainer.useContainer;
