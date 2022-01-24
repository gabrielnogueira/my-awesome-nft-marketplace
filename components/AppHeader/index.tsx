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
import Router, { useRouter } from "next/router";
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

  useEffect(() => {
    if (searchText) {
      router.push(`/items?search=${searchText}`);
    } else if (searchText == "" && router.pathname === "/items?search") {
      router.push(`/`);
    }
  }, [searchText, router.pathname]);

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
