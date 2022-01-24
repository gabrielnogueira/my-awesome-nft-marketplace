import styled from "styled-components";
import Image from "next/image";
import tw from "twin.macro";

export const Title = styled.h1.attrs({
  className: `inline-flex text-black items-center border bold border-transparent text-sm font-bold`,
})``;

const ImageBackgroundWrapper = styled.div.attrs({
  className: `absolute w-[200px] h-[200px] opacity-50`,
})``;

export const ReachedEnd = styled.div.attrs({
  className: `font-medium text-3xl flex justify-center items-center h-[400px]`,
  children: (
    <ImageBackgroundWrapper>
      <Image
        src="/assets/images/circle.png"
        layout="fill"
        objectFit="contain"
      />
    </ImageBackgroundWrapper>
  ),
})`
  &::after {
    content: "Ups.. no results for your search ";
    ${tw`absolute z-20`}
  }
`;
