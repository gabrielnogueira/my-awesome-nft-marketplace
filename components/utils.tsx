import Image from "next/image";
import styled from "styled-components";
import tw from "twin.macro";

export const AppWrapper = styled.div.attrs({
  className: `relative py-0.5 px-3 bg-app-background bg-full bg-no-repeat bg-right-top min-h-full `,
})`
  &::after {
    content: " ";
    ${tw`absolute top-0 right-0 bottom-0 left-0 bg-cover bg-gradient-to-b from-transparent via-transparent to-white bg-no-repeat bg-right-top w-full h-[112vw]`}
  }
`;

export const ContentWrapper = styled.div.attrs({
  className: `max-w-[1200px] h-full m-auto`,
})`
  * {
    ${tw`z-10`}
  }
`;

const ImageBackgroundWrapper = styled.div.attrs({
  className: `absolute w-[200px] h-[200px] opacity-50`,
})``;

export const ErrorFallback = styled.div.attrs({
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
    content: "Ups.. something went wrong ";
    ${tw`absolute z-20`}
  }
`;
