import styled from "styled-components";
import tw from "twin.macro";

export const Card = styled.div.attrs({
  className:
    "c-card cursor-pointer block bg-white shadow-md hover:shadow-xl rounded-3xl overflow-hidden w-full",
})``;

export const CoverWrapper = styled.div.attrs({
  className: `relative h-64 overflow-hidden`,
})``;

export const Body = styled.div.attrs({
  className: `py-2 px-4 pb-4`,
})``;

export const Title = styled.h2.attrs({
  className: `font-black text-sm uppercase pb-1`,
})``;

export const Value = styled.span.attrs({
  className: `font-bold text-lg `,
})``;

export const ValueCaption = styled.span.attrs({
  className: `font-bold text-gray-300 text-sm ml-1`,
})``;

export const AvatarGroup = styled.div.attrs({
  className: `flex -space-x-1 overflow-hidden pb-1`,
})`
    img, > div {
      ${tw`h-8 w-8`}
    }
`;

export const Row = styled.div.attrs({
  className: `flex justify-start items-baseline`,
})`
`;

export const Footer = styled(Row)`
  ${tw`justify-between items-center pt-2`}

`
