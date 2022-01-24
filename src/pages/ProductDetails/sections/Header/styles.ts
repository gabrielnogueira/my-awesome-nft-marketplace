import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.div.attrs({
  className: `relative flex justify-center items-center w-full`,
})`
  button {
    ${tw`ml-2 mr-2`}
  }
`;

export const FloatingButton = styled.div.attrs({
  className: `absolute right-0`
})``;
