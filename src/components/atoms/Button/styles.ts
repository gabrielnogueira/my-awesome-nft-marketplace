import styled from "styled-components";
import tw from "twin.macro";

export const Button = styled.button.attrs({
  className: `inline-flex text-black items-center px-4 py-2 border bold border-transparent text-xs font-bold rounded-full 
    hover:text-white hover:font-normal hover:bg-indigo-700`,
})`
  ${({ active }) =>
    active ? tw`bg-indigo-600 shadow-sm text-white font-medium` : ""}
`;
