import { ThemeProps } from "app/utils/theme/theme.interface";
import styled from "styled-components";

const NAVIGATION_BAR_WIDTH = 65;
const NAVIGATION_IMAGE_BUTTON_SIZE = 40;

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
  width: NAVIGATION_IMAGE_BUTTON_SIZE,
  height: NAVIGATION_IMAGE_BUTTON_SIZE,
  cursor: "pointer",
}));
