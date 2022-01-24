import "../styles/globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";
import tw from "twin.macro";
import { SearchProvider } from "../src/providers/search";
import AppHeader from "../components/AppHeader";
import { ItemProvider } from "../src/providers/item";

const AppWrapper = styled.div.attrs({
  className: `relative py-0.5 px-3 bg-app-background bg-full bg-no-repeat bg-right-top min-h-full `,
})`
  &::after {
    content: " ";
    ${tw`absolute top-0 right-0 bottom-0 left-0 bg-cover bg-gradient-to-b from-transparent via-transparent to-white bg-no-repeat bg-right-top w-full h-[112vw]`}
  }
`;

// const BackgroundOverlayWrapper = styled.div.attrs({
//   className: `z-0 absolute top-0 right-0 w-full h-full overflow-hidden`,
// })``;

// const BackgroundOverlay = styled.div.attrs({
//   className: `bg-gradient-to-b from-transparent via-transparent to-white bg-no-repeat bg-right-top w-full max-h-[2200px] min-h-[100rem] h-[100%]`,
// })``;

const ContentWrapper = styled.div.attrs({
  className: `max-w-[1200px] h-full m-auto`,
})`
  * {
    ${tw`z-10`}
  }
`;

function MyApp({ Component, pageProps }) {
  const renderHeader = Component.name !== "NotFound";

  return (
    <AppWrapper>
      {/* <BackgroundOverlayWrapper>
        <BackgroundOverlay />
      </BackgroundOverlayWrapper> */}
      <ContentWrapper>
        <SearchProvider>
          <ItemProvider>
            <AppHeader isValidPage={renderHeader} />
            <Component {...pageProps} />
          </ItemProvider>
        </SearchProvider>
      </ContentWrapper>
    </AppWrapper>
  );
}

export default MyApp;
