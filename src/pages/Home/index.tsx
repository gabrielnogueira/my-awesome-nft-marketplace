import PageTemplate from "../templates/PageTemplate";
import { LoadingContext } from "../../providers/loading";
import ProductCardList from "../templates/ProductCardList";
import ContentHeader from "../templates/ContentHeader";
import { Title } from "./styles";
import { useDataFetcher } from "../../hooks/useDataFetcher";
import { getTrendingItems } from "../../services/items";
import { Item } from "../../../interfaces";

const Home: React.FC = () => {
  const { data, more, isFetching, ended } = 
    useDataFetcher<Item[]>(getTrendingItems());

  console.log({data, more, isFetching, ended});

  return (
    <PageTemplate>
      <LoadingContext.Provider value={{ isLoading: isFetching }}>
        <ContentHeader>
          <Title>Trending Items</Title>
        </ContentHeader>
        <ProductCardList items={data} loadMore={more} hasMore={!ended} />
      </LoadingContext.Provider>
    </PageTemplate>
  );
};

export default Home;
