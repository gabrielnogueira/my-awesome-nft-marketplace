import "../styles/globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import { SearchProvider } from "../src/providers/search";
import AppHeader from "../components/AppHeader";
import { ItemProvider } from "../src/providers/item";
import { ErrorBoundary } from "react-error-boundary";
import { AppWrapper, ContentWrapper, ErrorFallback } from "components/utils";
import { useState } from "react";
import { SwapAnimationWrapper } from "src/components/utils/animations";

function MyApp({ Component, pageProps, router }) {
  const renderHeader = Component.name !== "NotFound";
  const [error, setError] = useState(0);

  return (
    <AppWrapper>
      <ContentWrapper>
        <ErrorBoundary
          FallbackComponent={() => {
            return (
              <>
                <AppHeader
                  isValidPage={false}
                  //should reset error state when user navigate to home
                  onClickCallback={() => setError(Math.random())}
                />
                <ErrorFallback />
              </>
            );
          }}
          resetKeys={[error]}
        >
          <SearchProvider>
            <AppHeader isValidPage={renderHeader} />
            <ItemProvider>
              <SwapAnimationWrapper key={router.route}>
                <Component {...pageProps} />
              </SwapAnimationWrapper>
            </ItemProvider>
          </SearchProvider>
        </ErrorBoundary>
      </ContentWrapper>
    </AppWrapper>
  );
}

export default MyApp;
