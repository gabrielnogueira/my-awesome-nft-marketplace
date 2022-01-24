import { useEffect, useState } from "react";
import PageTemplate from "../templates/PageTemplate";
import { LoadingContext } from "../../providers/loading";
import ProductCardList from "../templates/ProductCardList";
import { Title } from "./styles";
import Header from "../templates/ContentHeader";
import { useSearch } from "../../providers/search";

const ProductDetails: React.FC = () => {
  const { data, more, isFetching, ended } = useSearch();

  return (
    <PageTemplate>
      <LoadingContext.Provider value={{ isLoading: isFetching}}>
        <Header>
          <Title>Search Results</Title>
        </Header>
        <ProductCardList items={data} loadMore={more} hasMore={!ended} />
      </LoadingContext.Provider>
    </PageTemplate>
  );
};

export default ProductDetails;
