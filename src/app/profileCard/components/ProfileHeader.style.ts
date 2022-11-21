import { ThemeProps } from "app/utils/theme/theme.interface";
import styled from "styled-components";

const IMAGE_SIZE = 20;

export const ProfileHeaderWrapper = styled.div<ThemeProps>(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing.middle,
}));

export const ProfileHedaerImageDiv = styled.div<ThemeProps>(({ theme }) => ({
  border: `1px solid ${theme.colors.white}`,
  borderRadius: 100,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing.xxSmall,
}));

export const ProfileHeaderImage = styled.img<ThemeProps>(({ theme }) => ({
  width: IMAGE_SIZE,
  height: IMAGE_SIZE,
  cursor: "pointer",
  filter: "invert(100%)",
}));

export const ProfileHeaderTextButton = styled.div<ThemeProps>(({ theme }) => ({
  color: theme.colors.white,
  fontSize: theme.fontSize.small,
  padding: theme.spacing.small,
  cursor: "pointer",
}));
