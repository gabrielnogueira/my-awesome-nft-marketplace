import { Item } from "../../../../../interfaces";
import { useDataFetcher } from "../../../../hooks/useDataFetcher";
import {
  LoadingContext,
  LoadingProps,
  withLoadingContext,
} from "../../../../providers/loading";
import { getRelatedItems } from "../../../../services/items";
import ProductCardList from "../../../templates/ProductCardList";

export type RelatedProducts = LoadingProps & {
  selectedItem: Item;
};

const RelatedProducts: React.FC<RelatedProducts> = ({
  isLoading,
  selectedItem,
}) => {
  if (isLoading) {
    return <ProductCardList items={[]} />;
  }

  const { data, more, isFetching, ended } = useDataFetcher<Item[]>(
    getRelatedItems(selectedItem?.id?.toString()),
  );

  return (
    <LoadingContext.Provider value={{ isLoading: isFetching }}>
      <ProductCardList items={data} loadMore={more} hasMore={!ended} />
    </LoadingContext.Provider>
  );
};

export default withLoadingContext(RelatedProducts);
