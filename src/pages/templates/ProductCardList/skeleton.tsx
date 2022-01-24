import Card from "../../../components/organisms/ProductCard";
import { CardList, CardRow } from "./styles";

export const CardRowSkeleton = ({ index }) => {
  return (
    <CardRow key={`skeleton-row-1`}>
      <Card key={`card-row-1-1`} />
      <Card key={`card-row-1-2`} />
      <Card key={`card-row-1-3`} />
      <Card key={`card-row-1-4`} />
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
