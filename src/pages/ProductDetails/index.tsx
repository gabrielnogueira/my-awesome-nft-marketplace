import PageTemplate from "../templates/PageTemplate";
import ProductCover from "../../components/organisms/ProductCover";
import Header from "./sections/Header";
import { Container, Section } from "./styles";
import { LoadingContext } from "../../providers/loading";
import FloatingHeader from "../templates/FloatingHeader";
import { useSelectedItem } from "../../providers/item";
import { useEffect, useRef, useState } from "react";
import RelatedProducts from "./sections/RelatedProducts";
import {
  ShowAnimationWrapper,
  SwapAnimationWrapper,
} from "src/components/utils/animations";
import { AnimatePresence } from "framer-motion";

const ProductDetails: React.FC = () => {
  const [showFloatingBar, setShowFloatingBar] = useState(false);
  const { selectedItem } = useSelectedItem();
  const relatedProductsRef = useRef();

  let observerOption = {
    rootMargin: "-40%",
  };

  const scrollListener = (entries) => {
    const [entry] = entries;

    if (entry.isIntersecting) {
      setShowFloatingBar(true);
    } else {
      setShowFloatingBar(false);
    }
  };

  useEffect(() => {
    let observer = new IntersectionObserver(scrollListener, observerOption);

    if (relatedProductsRef.current) {
      observer.observe(relatedProductsRef.current);
    }

    return () => {
      if (relatedProductsRef.current) {
        observer.unobserve(relatedProductsRef.current);
      }
    };
  }, [relatedProductsRef, observerOption]);

  return (
    <PageTemplate>
      <Container>
        <LoadingContext.Provider value={{ isLoading: !selectedItem }}>
          <Header item={selectedItem} />
          <SwapAnimationWrapper key={selectedItem?.id.toString()}>
            <ProductCover item={selectedItem} />
          </SwapAnimationWrapper>
          <Section ref={relatedProductsRef} id="related">
            <RelatedProducts selectedItem={selectedItem} />
          </Section>
        </LoadingContext.Provider>
      </Container>
      <AnimatePresence>
        {showFloatingBar && (
          <ShowAnimationWrapper key={showFloatingBar.toString()}>
            <FloatingHeader />
          </ShowAnimationWrapper>
        )}
      </AnimatePresence>
    </PageTemplate>
  );
};

export default ProductDetails;
