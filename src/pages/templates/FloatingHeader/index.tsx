import Button from "../../../components/atoms/Button";
import FavoriteButton from "../../../components/molecules/FavoriteButton";

import {
  FloatingHeader,
  HeaderContent,
  LeftContent,
  RightContent,
  Content,
  ImageWrapper,
  RedeemButton,
  Title,
} from "./styles";
import Image from "next/image";
import { useSelectedItem } from "src/providers/item";

export interface PageHeaderProps {}

const FloatingHeaderWrapper: React.FC<PageHeaderProps> = (props) => {

  const {selectedItem} = useSelectedItem();
  return (
    <FloatingHeader>
      <HeaderContent>
        <LeftContent>
          <ImageWrapper>
            <Image
              src="/assets/images/logo.png"
              layout="fill"
              objectFit="cover"
              objectPosition="left"
            />
          </ImageWrapper>
          <Title>{selectedItem.name} by Diego Roa</Title>
        </LeftContent>
        <Content>
          <Button>The Gizmo</Button>
          <Button>The Item</Button>
          <Button active>The Collection</Button>
        </Content>
        <RightContent>
          <FavoriteButton>{selectedItem.favorites}</FavoriteButton>
          <RedeemButton>Redeem this item</RedeemButton>
        </RightContent>
      </HeaderContent>
    </FloatingHeader>
  );
};

export default FloatingHeaderWrapper;
