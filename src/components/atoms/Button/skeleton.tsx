import Skeleton from 'react-loading-skeleton'

import styled from "styled-components";

const ButtonBox = styled.div.attrs({
  className: "rounded-2xl w-[100px] h-[34px] mx-1"
})``;

const ButtonSkeleton = () => {
    return <ButtonBox>
        <Skeleton height="100%" borderRadius={100} />
    </ButtonBox>
}

export default ButtonSkeleton;