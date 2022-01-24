import Icon from "../../atoms/Icon";
import { SearchInput, SearchIconWrapper, Container } from "./styles";

export type SearchInputProps = React.InputHTMLAttributes<HTMLInputElement>;

const SearchInputWrapper: React.FC<SearchInputProps> = (props) => {
  return (
    <Container>
      <SearchInput {...props} />
      <SearchIconWrapper>
        <Icon icon="SearchIcon" />
      </SearchIconWrapper>
    </Container>
  );
};

export default SearchInputWrapper;
