import { ChangeEvent, KeyboardEvent } from "react";
import {
  SearchInputClearIcon,
  SearchInputIcon,
  SearchInputInput,
  SearchInputWrapper,
} from "./SearchInput.style";

interface SearchInputProps {
  searchKeyword?: string;
  onSearchKeywordChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClearSearchKewordClick?: () => void;
  onESCKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void;
}

function SearchInput({
  searchKeyword,
  onSearchKeywordChange,
  onClearSearchKewordClick,
  onESCKeyPress,
}: SearchInputProps) {
  return (
    <SearchInputWrapper>
      <SearchInputIcon />
      <SearchInputInput
        value={searchKeyword}
        autoFocus
        onChange={onSearchKeywordChange}
        onKeyDown={onESCKeyPress}
      />
      {searchKeyword && (
        <SearchInputClearIcon onClick={onClearSearchKewordClick} />
      )}
    </SearchInputWrapper>
  );
}

export default SearchInput;
