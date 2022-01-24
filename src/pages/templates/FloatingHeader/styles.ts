import styled from "styled-components";
import tw from "twin.macro";

export const FloatingHeader = styled.div.attrs({
  className: `w-full bg-white fixed top-0 left-0 z-30`,
})``;

export const HeaderContent = styled.div.attrs({
  className: `flex justify-between items-center w-[1200px] h-[60px] m-auto`,
})``;

export const LeftContent = styled.div.attrs({
  className: `flex justify-start items-center h-full`,
})`
  a {
    ${tw`ml-10`}
  }
`;

export const Content = styled.div.attrs({
  className: `flex justify-center items-center h-full w-full max-w-[40%]`,
})`
  button {
      ${tw`mx-2`}
  }
`;

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
  className: `relative w-[34px] h-[34px] overflow-hidden`,
})``;

export const Title = styled.h1.attrs({
  className:`font-black text-black ml-3`
})``;

export const RedeemButton = styled.button.attrs({
  className: `ml-2 relative inline-flex font-medium text-white items-center px-4 py-2 border border-transparent text-xs rounded-full 
 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 overflow-hidden h-[36px]`,
})`
  &::before {
    content: " ";
    transform: rotate(12deg);
    ${tw`absolute w-[181px] h-[432px] top-[-56px] left-[-32px] bg-full bg-left-top bg-no-repeat bg-redeem-background rounded-full`}
  }

  &::after {
    content: "${({ children }) => children}";
    ${tw`absolute inline-flex items-center justify-center left-0 top-0 h-full w-full`}
  }
`;
