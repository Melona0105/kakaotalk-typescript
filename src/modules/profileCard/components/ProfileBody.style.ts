import styled from "styled-components";
import { ThemeProps } from "utils/theme/theme.interface";

const IMAGE_SIZE = 85;

export const ProfileBodyWrapper = styled.div<ThemeProps>(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "center",
  paddingBottom: theme.spacing.xxLarge,
  gap: theme.spacing.middle,
  color: theme.colors.white,
  fontSize: theme.fontSize.default,
}));

export const ProfileBodyImage = styled.img<ThemeProps>(({ theme }) => ({
  width: IMAGE_SIZE,
  height: IMAGE_SIZE,
}));
