import { ThemeProps } from "app/utils/theme/theme.interface";
import resetIcon from "assets/icons/button_close.png";
import searchBarIcon from "assets/icons/searchbar_icon.png";
import styled from "styled-components";

const SEARCH_ICON_SIZE = 25;
const CLEAR_ICON_SIZE = 15;

export const SearchInputWrapper = styled.div<ThemeProps>(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: theme.colors.gray3,
}));

export const SearchInputIcon = styled.img.attrs(() => ({
  src: searchBarIcon,
}))<ThemeProps>(({ theme }) => ({
  width: SEARCH_ICON_SIZE,
  height: SEARCH_ICON_SIZE,
  paddingRight: theme.spacing.xSmall,
}));

export const SearchInputInput = styled.input<ThemeProps>(({ theme }) => ({
  flex: 1,
  paddingRight: 0,
  border: "none",
  outline: "none",
  backgroundColor: theme.colors.gray3,
}));

export const SearchInputClearIcon = styled.img.attrs(() => ({
  src: resetIcon,
}))<ThemeProps>(({ theme }) => ({
  width: CLEAR_ICON_SIZE,
  height: CLEAR_ICON_SIZE,
  paddingRight: theme.spacing.small,
  cursor: "pointer",
}));
