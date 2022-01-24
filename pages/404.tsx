import Image from "next/image";
import styled from "styled-components";

const Container = styled.div.attrs({
  className: `absolute flex justify-center items-center top-[75px] bottom-[75px] left-0 right-0`,
})``;

export const ImageWrapper = styled.div.attrs({
  className: `relative w-[700px] h-[700px] opacity-95`,
})``;

const TextContainer = styled.div.attrs({
  className: `absolute flex flex-col justify-center items-center z-10 h-[100%] top-0 left-0 right-0 bottom-0`,
})``;
export const Title = styled.h1.attrs({
  className: `text-9xl text-white font-medium font-[Hunter]`,
})``;

function NotFound() {
  return (
    <Container>
      <ImageWrapper>
        <Image src="/assets/images/circle.png" layout="fill" objectFit="contain" />
      </ImageWrapper>
      <TextContainer>
        <Title>404</Title>
        <Title>Not Found</Title>
      </TextContainer>
    </Container>
  );
}

export default NotFound;
