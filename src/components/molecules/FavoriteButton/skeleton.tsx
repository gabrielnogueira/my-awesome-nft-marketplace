import Skeleton from 'react-loading-skeleton'

import styled from "styled-components";

const FavoriteButtonBox = styled.div.attrs({
  className: "rounded-2xl w-[55px] h-[27px] mx-1"
})``;

const FavoriteButtonSkeleton = () => {
    return <FavoriteButtonBox>
        <Skeleton height="100%" borderRadius={100} />
    </FavoriteButtonBox>
}

export default FavoriteButtonSkeleton;