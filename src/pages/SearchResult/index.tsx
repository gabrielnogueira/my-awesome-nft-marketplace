import PageTemplate from "../templates/PageTemplate";
import { LoadingContext } from "../../providers/loading";
import ProductCardList from "../templates/ProductCardList";
import { NoResults, Title } from "./styles";
import Header from "../templates/ContentHeader";
import { useSearch } from "../../providers/search";
import { SwapAnimationWrapper } from "src/components/utils/animations";

const ProductDetails: React.FC = () => {
  const { data, more, isFetching, ended } = useSearch();

  return (
    <PageTemplate>
      <LoadingContext.Provider value={{ isLoading: isFetching }}>
        <Header>
          <Title>Search Results</Title>
        </Header>
        <SwapAnimationWrapper key={isFetching.toString()}>
          <ProductCardList items={data} loadMore={more} hasMore={!ended} />
        </SwapAnimationWrapper>
      </LoadingContext.Provider>
      {!isFetching && data.length == 0 && <NoResults />}
    </PageTemplate>
  );
};

export default ProductDetails;
