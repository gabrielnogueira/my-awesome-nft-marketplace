import styled from "styled-components";
import tw from "twin.macro";

export const SearchIconWrapper = styled.div.attrs({
  className:
    "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",
})`
  svg {
    ${tw`text-gray-300 w-[18px] h-[18px]`}
  }
`;

export const SearchInput = styled.input.attrs({
  className: `pl-10 py-2 shadow-md focus:ring-indigo-500 font-semibold focus:border-indigo-500 block w-full text-xs border border-gray-300 px-4 rounded-full placeholder-gray-300`,
})``;

export const Container = styled.div.attrs({
  className: `relative flex items-stretch flex-grow focus-within:z-10`,
})``;
