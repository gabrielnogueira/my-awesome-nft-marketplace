import styled from "styled-components";
import tw from "twin.macro";

export const ContentWrapper = styled.span.attrs({
  className: `ml-1 mr-0.5`,
})``;

export const FavoriteButton = styled.div`
  button {
    ${tw`bg-transparent items-end text-xs font-bold text-black hover:bg-transparent hover:text-black hover:font-bold hover:shadow-md px-1.5 py-1 border border-gray-400`}
  }
  svg {
    ${({ active }) =>
      active ? tw`text-red-500` : tw`text-gray-400`
    }
    ${tw`w-[17px] h-[17px]`}
`;
