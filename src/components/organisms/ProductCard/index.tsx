import FavoriteButton from "../../molecules/FavoriteButton";
import Avatar from "../../atoms/Avatar";
import Image from "next/image";
import Skeleton from "./skeleton";

import {
  Card,
  CoverWrapper,
  Body,
  Title,
  Value,
  ValueCaption,
  AvatarGroup,
  Row,
  Footer,
} from "./styles";
import { LoadingProps, withLoadingContext } from "../../../providers/loading";
import { Item } from "interfaces";
import { currencyFormat } from "src/components/utils/formatter";

export type ProductCardProps = React.HTMLAttributes<HTMLDivElement> &
  LoadingProps & {
    title?: string;
    item?: Item;
  };

const ProductCardWrapper: React.FC<ProductCardProps> = ({
  isLoading,
  title,
  item,
  ...props
}) => {
  if (isLoading || !item) {
    return <Skeleton />;
  }
  return (
    <Card {...props}>
      <CoverWrapper>
        <Image
          src={item.image}
          layout="fill"
          objectFit="cover"
        />
      </CoverWrapper>
      <Body>
        <Title>{item.name}</Title>
        <Row>
          <Value>{currencyFormat(item.price)}</Value>
          <ValueCaption>List Item</ValueCaption>
        </Row>
        <Footer>
          <AvatarGroup>
            <Avatar src="/assets/images/creator-1.png" />
            <Avatar src="/assets/images/creator-2.png" />
            <Avatar src="/assets/images/creator-3.png" />
          </AvatarGroup>
          <FavoriteButton>{item.favorites}</FavoriteButton>
        </Footer>
      </Body>
    </Card>
  );
};

export default withLoadingContext(ProductCardWrapper);
