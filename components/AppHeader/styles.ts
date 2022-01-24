import styled from "styled-components";
import tw from 'twin.macro';

export const PageHeader = styled.div.attrs({
  className: `flex justify-between items-center w-full h-[60px]`,
})``;

export const LeftContent = styled.div.attrs({
  className: `flex justify-start items-center h-full`,
})`
  a {
    ${tw`ml-10`}
  }
`;

export const Content = styled.div.attrs({
  className: `flex justify-start items-center h-full w-full max-w-[40%]`,
})``;

export const RightContent = styled.div.attrs({
  className: `flex justify-end items-center h-full`,
})`
  a {
    ${tw`mr-10`}
  }

  .avatar {
    ${tw`h-8 w-8`}
  }
`;

export const ImageWrapper = styled.div.attrs({
  className: `relative w-[125px] h-[100%]`
})`
  width: 125px;

  cursor: ${({onClick}) => onClick ? 'pointer' : 'auto'}
`
