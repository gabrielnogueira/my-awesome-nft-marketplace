import styled from "styled-components";
import tw from "twin.macro";

export const ContentWrapper = styled.span.attrs({
  className: `mr-1`,
})``;

export const Dropdown = styled.div.attrs({
  className: `inline-flex items-center text-sm cursor-pointer hover:drop-shadow-md`
})`
  svg {
    ${({ active }) => (active ? tw`text-red-500` : tw`text-gray-400`)}
    ${tw`w-[17px] h-[17px]`}
`;
