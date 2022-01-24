import Card from "../../../components/organisms/ProductCard";
import { CardRow } from "./styles";

export const CardRowSkeleton = ({ index }) => {
  return (
    <CardRow key={`skeleton-row-${index}`}>
      <Card key={`card-row--${index}-0`} />
      <Card key={`card-row--${index}-1`} />
      <Card key={`card-row--${index}-2`} />
      <Card key={`card-row--${index}-3`} />
    </CardRow>
  );
};
const ProductCardListSkeleton = () => {
  return (
    <>
      <CardRowSkeleton index={1} />
      <CardRowSkeleton index={2} />
    </>
  );
};

export default ProductCardListSkeleton;
