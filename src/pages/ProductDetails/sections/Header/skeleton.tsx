import FavoriteButton from "../../../../components/molecules/FavoriteButton";
import Button from "../../../../components/atoms/Button";
import { FloatingButton, Container } from "./styles";
import ContentHeader from "../../../templates/ContentHeader";

const HeaderSkeleton = () => {
  return (
    <ContentHeader>
      <Container>
        <Button />
        <Button />
      </Container>
      <FloatingButton>
        <FavoriteButton />
      </FloatingButton>
    </ContentHeader>
  );
};

export default HeaderSkeleton;
