import SearchInput from "../../src/components/molecules/SearchInput";
import Anchor from "../../src/components/atoms/Anchor";
import {
  PageHeader,
  LeftContent,
  RightContent,
  Content,
  ImageWrapper,
} from "./styles";
import Image from "next/image";
import Dropdown from "../../src/components/molecules/Dropdown";
import Avatar from "../../src/components/atoms/Avatar";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSearch } from "../../src/providers/search";

export interface PageHeaderProps {
  isValidPage?: boolean;
  onClickCallback?(): void;
}

const Logo = ({ onClick }) => {
  return (
    <ImageWrapper onClick={onClick}>
      <Image src="/assets/images/logo.png" layout="fill" objectFit="contain" />
    </ImageWrapper>
  );
};

//this components is the base header of the app
//is responsible to fetch search using useSearch hook
//it handle scenario that user types manually on the url
//it handle scenario when user start typing in a route that is not the search,
//so redirect user to search route
const AppHeader: React.FC<PageHeaderProps> = ({
  isValidPage,
  onClickCallback,
}) => {
  const router = useRouter();

  if (!isValidPage) {
    return (
      <PageHeader>
        <LeftContent>
          <Logo
            onClick={() => {
              onClickCallback();
              router.push("/");
            }}
          />
        </LeftContent>
      </PageHeader>
    );
  }

  const { searchText, setSearchText } = useSearch();

  //if user is on home or item details, redirect to search results
  //if is already on search result but clear the search, redirect to home
  useEffect(() => {
    if (searchText) {
      router.push(`/items?search=${searchText}`);
    } else if (
      searchText == "" &&
      router.asPath.substring(0, router.asPath.length - 1) === "/items?search="
    ) {
      router.push(`/`);
    }
  }, [searchText, router.pathname]);

  //handle manually type on url
  useEffect(() => {
    const { search } = router.query;
    if (
      search &&
      typeof search === "string" &&
      search.trim() !== searchText.trim()
    ) {
      setSearchText(search);
    }
  }, [router.pathname, router.asPath, router.query]);

  return (
    <PageHeader>
      <LeftContent>
        <Logo
          onClick={() => {
            setSearchText("");
            router.push("/");
          }}
        />
        <Anchor>Explore</Anchor>
      </LeftContent>
      <Content>
        <SearchInput
          placeholder="Search items, creators or collections"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </Content>
      <RightContent>
        <Anchor>My Items</Anchor>
        <Dropdown>
          <Avatar src="/assets/images/profile.png" />
        </Dropdown>
      </RightContent>
    </PageHeader>
  );
};

export default AppHeader;
