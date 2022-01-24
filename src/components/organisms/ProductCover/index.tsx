import Image from "next/image";
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
import Anchor from "../../atoms/Anchor";
import Avatar from "../../atoms/Avatar";
import Icon from "../../atoms/Icon";
import ProductCoverSkeleton from './skeleton';
import { LoadingProps, withLoadingContext } from "../../../providers/loading";
import { Item } from "interfaces";

export type ProductCoverProps = LoadingProps & {
  item: Item
};

const ProductCoverWrapper: React.FC<ProductCoverProps> = ({isLoading, item}) => {

  if(isLoading){
    return <ProductCoverSkeleton />
  }
  return (
    <ProductCover>
      <CoverImageWrapper>
        <Image
          src={item.image}
          layout="fill"
          objectFit="cover"
        />
      </CoverImageWrapper>
      <Content>
        <Body>
          <Title>{item.name}</Title>
          <Caption>12 Items</Caption>
          <Description>{item.description}</Description>
          <CreatorInfo>
            <Avatar src="/assets/images/creator-1.png" />
            <Column>
              <Caption>Creator</Caption>
              <Label>El Burgues</Label>
            </Column>
          </CreatorInfo>
        </Body>
        <Footer>
          <Anchor href="#related">
            <Icon icon="ArrowDownIcon" />
            Discover the collection
          </Anchor>
        </Footer>
      </Content>
    </ProductCover>
  );
};

export default withLoadingContext(ProductCoverWrapper);
