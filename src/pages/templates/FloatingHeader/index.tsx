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

export interface PageHeaderProps {}

const FloatingHeaderWrapper: React.FC<PageHeaderProps> = (props) => {
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
          <Title>Lola by Diego Roa</Title>
        </LeftContent>
        <Content>
          <Button>The Gizmo</Button>
          <Button>The Item</Button>
          <Button active>The Collection</Button>
        </Content>
        <RightContent>
          <FavoriteButton>78</FavoriteButton>
          <RedeemButton>Redeem this item</RedeemButton>
        </RightContent>
      </HeaderContent>
    </FloatingHeader>
  );
};

export default FloatingHeaderWrapper;
