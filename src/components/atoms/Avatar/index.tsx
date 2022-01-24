import { Avatar } from "./styles";
import Skeleton from "./skeleton";
import { LoadingProps, withLoadingContext } from "../../../providers/loading";
import Image, { ImageProps } from "next/image";

export type AvatarProps = Omit<ImageProps, "src"> &
  LoadingProps & {
    src?: string;
  };

const AvatarWrapper: React.FC<AvatarProps> = ({ isLoading, src, ...props }) => {
  if (isLoading) {
    return <Skeleton />;
  }
  return (
    <Avatar>
      <Image src={src} {...props} layout="fill" objectFit="cover" />
    </Avatar>
  );
};

export default withLoadingContext(AvatarWrapper);
