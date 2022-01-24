import styled from "styled-components";
import tw from "twin.macro";

export const ProductCover = styled.div.attrs({
  className:
    "w-full grid grid-cols-2 gap-6",
})``;

export const CoverImageWrapper = styled.div.attrs({
  className: `relative w-full aspect-square rounded-3xl shadow-lg`,
})`
    img, span {
        ${tw`rounded-3xl`}
    }
`;

export const Content = styled.div.attrs({
    className:
    "flex flex-col w-full ml-8 ",
})``;
    
export const Body = styled.div.attrs({
  className: `flex flex-col flex-1 justify-center`,
})``;

export const Title = styled.h1.attrs({
  className: `text-5xl font-medium mb-3 font-[Hunter]`,
})``;

export const Caption = styled.span.attrs({
  className: `text-md font-bold text-gray-500 min-w-[100px]`,
})``;

export const Description = styled.p.attrs({
  className: `text-black font-semibold mt-6`,
})``;

export const Footer = styled.div.attrs({
  className: `pb-5`,
})`

  a {
    ${tw`mr-2 font-black`}
    span {
      ${tw`min-w-[100px]`}
    }
  }
  svg {
    ${tw`mr-2 h-4 w-4`}
  }
`;

export const Column = styled.div.attrs({
  className: `flex flex-col`,
})``;

export const Label = styled.span.attrs({
})``;


export const CreatorInfo = styled.div.attrs({
  className: `flex mt-8 min-w-[100px]`,
})`

  .avatar {
    ${tw`h-14 w-14`}
  }

  ${Column} {
    ${tw`ml-5`}
  }

  ${Caption} {
    ${tw`text-xs mt-3.5`}
  }

  ${Label} {
    ${tw`font-bold -mt-1`}
  }
`;


