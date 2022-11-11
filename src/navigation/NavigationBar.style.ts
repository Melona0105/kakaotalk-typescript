import styled from "styled-components";
import { ThemeProps } from "utils/theme/theme.interface";

const NAVIGATION_BAR_WIDTH = 65;

export const NavigationBarWrapper = styled.div<ThemeProps>(({ theme }) => ({
  width: NAVIGATION_BAR_WIDTH,
  backgroundColor: theme.colors.gray2,
  borderTopLeftRadius: theme.config.borderRadius,
  borderBottomLeftRadius: theme.config.borderRadius,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  paddingTop: theme.spacing.xxLarge * 1.5,
  paddingBottom: theme.spacing.large,
}));

export const NavigationBarDiv = styled.div<ThemeProps>(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 10,
}));

export const NavigationBarImageButton = styled.img<ThemeProps>(({ theme }) => ({
  width: 40,
  height: 40,
  cursor: "pointer",
}));
