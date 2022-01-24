import styled from "styled-components";
import tw from "twin.macro";

export const Anchor = styled.a.attrs({
  className: `inline-flex text-black items-center border bold border-transparent text-xs font-bold cursor-pointer 
    hover:drop-shadow `,
})`
  ${({ active }) =>
    active ? tw`bg-indigo-600 shadow-sm text-white font-medium` : ""}
`;
