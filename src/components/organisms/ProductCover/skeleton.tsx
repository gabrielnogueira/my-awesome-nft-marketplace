import Skeleton from "react-loading-skeleton";
import AvatarSkeleton from "../../atoms/Avatar/skeleton";
import Anchor from "../../atoms/Anchor";
import {
  ProductCover,
  CoverImageWrapper,
  Body,
  Title,
  Caption,
  Description,
  Footer,
  CreatorInfo,
  Column,
  Label,
  Content,
} from "./styles";

const ProductCoverSkeleton = () => {
  return (
    <ProductCover>
      <CoverImageWrapper>
        <Skeleton height="100%"/>
      </CoverImageWrapper>
      <Content>
        <Body>
          <Title>
            <Skeleton />
          </Title>
          <Caption>
            <Skeleton />
          </Caption>
          <Description>
            <Skeleton count={5} />
          </Description>
          <CreatorInfo>
            <AvatarSkeleton />
            <Column>
              <Caption>
                <Skeleton />
              </Caption>
              <Label>
                <Skeleton />
              </Label>
            </Column>
          </CreatorInfo>
        </Body>
        <Footer>
          <Anchor>
            <Skeleton />
          </Anchor>
        </Footer>
      </Content>
    </ProductCover>
  );
};

export default ProductCoverSkeleton;
