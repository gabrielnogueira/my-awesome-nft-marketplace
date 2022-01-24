import Skeleton from 'react-loading-skeleton'

import styled from "styled-components";

const AvatarBox = styled.div.attrs({
  className: "inline-block h-12 w-12 rounded-full shadow-md"
})``;

const AvatarSkeleton = () => {
    return <AvatarBox>
        <Skeleton circle height="100%" />
    </AvatarBox>
}

export default AvatarSkeleton;