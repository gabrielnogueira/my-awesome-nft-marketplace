import FavoriteButton from "../../../../components/molecules/FavoriteButton";
import Button from "../../../../components/atoms/Button";
import { FloatingButton, Container } from "./styles";
import Skeleton from "./skeleton";
import Header from "../../../templates/ContentHeader";
import {
  withLoadingContext,
  LoadingProps,
} from "../../../../providers/loading";
import { Item } from "interfaces";

export type HeaderProps = React.HTMLAttributes<HTMLDivElement> & LoadingProps & {
  item: Item
};

const HeaderWrapper: React.FC<HeaderProps> = ({ isLoading, item }) => {
  if (isLoading) {
    return <Skeleton />;
  }
  return (
    <Header>
      <Container>
        <Button active>The Collection</Button>
        <Button>The Item</Button>
      </Container>
      <FloatingButton>
        <FavoriteButton>{item.favorites}</FavoriteButton>
      </FloatingButton>
    </Header>
  );
};

export default withLoadingContext(HeaderWrapper);
