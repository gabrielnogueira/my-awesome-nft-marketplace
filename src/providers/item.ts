import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { createContainer } from "unstated-next";
import { Item } from "../../interfaces";
import { getItem } from "../services/items";
import { useSearch } from "./search";

const useHook = () => {
  const [selectedItem, setSelectedItem] = useState<Item>();
  const {setSearchText} = useSearch();
  const router = useRouter();

  useEffect(() => {
    setSearchText("");
    if (selectedItem) {
      const url = `/items/${selectedItem.id}`;
      if(router.pathname !== url){
        router.push(`/items/${selectedItem.id}`);
      }
    }
  }, [selectedItem, router.pathname]);

  useEffect(()=>{
    if(router.pathname == '/items/[id]' && router.pathname !== router.asPath && !selectedItem){
      const {id} = router.query;
      const fetch = async () => {
        const item = await getItem(id.toString());
        setSelectedItem(item);
      }
      fetch();
    }

  },[router.pathname, router.asPath])

  return { selectedItem, setSelectedItem };
};

const ItemContainer = createContainer(useHook);

export const ItemProvider = ItemContainer.Provider;
export const useSelectedItem = ItemContainer.useContainer;
