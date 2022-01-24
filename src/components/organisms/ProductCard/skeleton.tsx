import Skeleton from "react-loading-skeleton";
import Avatar from "../../atoms/Avatar";
import FavoriteButton from '../../molecules/FavoriteButton';

import {
    Card,
    CoverWrapper,
    Body,
    Title,
    Value,
    ValueCaption,
    AvatarGroup,
    Row,
    Footer
  } from "./styles";

const ProductCardSkeleton = () => {
  return (
    <Card>
      <CoverWrapper>
        <Skeleton height="100%" borderRadius={0} />
      </CoverWrapper>
      <Body>
        <Title><Skeleton width="50%" /></Title>
        <Row>
          <Value><Skeleton width="60px" /></Value>
          <ValueCaption><Skeleton width="80px" /></ValueCaption>
        </Row>
        <Footer>
          <AvatarGroup>
              <Avatar />
              <Avatar/>
              <Avatar />
          </AvatarGroup>
          <FavoriteButton />
        </Footer>
      </Body>
    </Card>
  );
};

export default ProductCardSkeleton;
