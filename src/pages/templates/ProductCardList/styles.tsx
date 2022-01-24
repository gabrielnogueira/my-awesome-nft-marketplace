import Image from "next/image";
import styled from "styled-components";
import tw from "twin.macro";

export const CardList = styled.div.attrs({
  className: `relative w-full h-[100%] flex-1`,
})`
  button {
    ${tw`ml-2 mr-2`}
  }
`;

export const CardRow = styled.div.attrs({
  className: `card-row grid grid-cols-4 gap-6 pb-6`,
})``;

const ImageBackgroundWrapper = styled.div.attrs({
  className: `absolute w-[200px] h-[200px] opacity-50`,
})``;

export const ReachedEnd = styled.div.attrs({
  className: `font-medium text-3xl flex justify-center items-center h-[300px]`,
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
    content: "Ups.. you reached the end of the line";
    ${tw`absolute z-20`}
  }
`;
