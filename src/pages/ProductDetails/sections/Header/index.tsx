import FavoriteButton from "../../../../components/molecules/FavoriteButton";
import Button from "../../../../components/atoms/Button";
import { FloatingButton, Container } from "./styles";
import Skeleton from "./skeleton";
import Header from "../../../templates/ContentHeader";
import {
  withLoadingContext,
  LoadingProps,
} from "../../../../providers/loading";

export type HeaderProps = React.HTMLAttributes<HTMLDivElement> & LoadingProps;

const HeaderWrapper: React.FC<HeaderProps> = ({ isLoading }) => {
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
        <FavoriteButton>75</FavoriteButton>
      </FloatingButton>
    </Header>
  );
};

export default withLoadingContext(HeaderWrapper);
