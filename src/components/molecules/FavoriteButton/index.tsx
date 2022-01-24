import Button, { ButtonProps } from "../../atoms/Button";
import Icon from "../../atoms/Icon";
import { ContentWrapper, FavoriteButton } from "./styles";
import Skeleton from "./skeleton";
import { useEffect, useState } from "react";

export type FavoriteButtonProps = ButtonProps;

const FavoriteButtonWrapper: React.FC<FavoriteButtonProps> = ({
  children,
  active,
  isLoading,
}) => {
  if (isLoading) {
    return <Skeleton />;
  }

  const [isFavorited, setFavorited] = useState(active);

  useEffect(() => {
    if (active) {
      setFavorited(active);
    }
  }, [active]);

  return (
    <FavoriteButton
      active={isFavorited}
      onClick={(e) => {
        e.stopPropagation();
        setFavorited((value) => !value);
      }}
    >
      <Button>
        <Icon outline={!isFavorited} icon="HeartIcon" />{" "}
        <ContentWrapper>{children}</ContentWrapper>
      </Button>
    </FavoriteButton>
  );
};

export default FavoriteButtonWrapper;
