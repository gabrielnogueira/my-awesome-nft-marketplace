import PageTemplate from "../templates/PageTemplate";
import ProductCover from "../../components/organisms/ProductCover";
import Header from "./sections/Header";
import { Container, Section } from "./styles";
import { LoadingContext } from "../../providers/loading";
import FloatingHeader from "../templates/FloatingHeader";
import { useSelectedItem } from "../../providers/item";
import { useEffect, useState } from "react";
import RelatedProducts from "./sections/RelatedProducts";

const ProductDetails: React.FC = () => {
  const [showFloatingBar, setShowFloatingBar] = useState(false);
  const { selectedItem } = useSelectedItem();

  const scrollListener = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > 600) {
      setShowFloatingBar(true);
    } else {
      setShowFloatingBar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  return (
    <PageTemplate>
      <Container>
        <LoadingContext.Provider value={{ isLoading: !selectedItem }}>
          <Header />
          <ProductCover item={selectedItem} />
          <Section>
            <RelatedProducts selectedItem={selectedItem} />
          </Section>
        </LoadingContext.Provider>
      </Container>
      {showFloatingBar && <FloatingHeader />}
    </PageTemplate>
  );
};

export default ProductDetails;
