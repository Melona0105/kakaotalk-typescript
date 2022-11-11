import styled from "styled-components";
import { ThemeProps } from "utils/theme/theme.interface";

export const InnerContaienrWrapper = styled.div<ThemeProps>(({ theme }) => ({
  flex: 1,
  paddingTop: theme.spacing.small,
  maxWidth: theme.config.width,
  display: "flex",
  flexDirection: "column",
}));

export const BodyWrapper = styled.div<ThemeProps>(({ theme }) => ({
  maxHeight: theme.config.innerContentHeight,
  overflowY: "scroll",
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
}));
