import styled from "styled-components";
import { ThemeProps } from "utils/theme/theme.interface";

const IMAGE_SIZE = 20;

export const ProfileHeaderWrapper = styled.div<ThemeProps>(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const ProfileHedaerImageDiv = styled.div<ThemeProps>(({ theme }) => ({
  border: `1px solid ${theme.colors.black}`,
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
}));
