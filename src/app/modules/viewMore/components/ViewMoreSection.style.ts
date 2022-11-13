import { ThemeProps } from "app/utils/theme/theme.interface";
import styled from "styled-components";

export const ViewMoreSectionDiv = styled.div<ThemeProps>(({ theme }) => ({
  padding: theme.spacing.middle,
}));

export const ViewMoreSectionTextDiv = styled.div<ThemeProps>(({ theme }) => ({
  border: `1px solid ${theme.colors.gray}`,
  padding: theme.spacing.middle,
  borderRadius: 5,
  backgroundColor: theme.colors.gray3,
  display: "flex",
  justifyContent: "center",
}));

export const ViewMoreSectionText = styled.div<ThemeProps>(({ theme }) => ({
  fontSize: theme.fontSize.small,
}));

export const ViewMoreSectionBottomDiv = styled.div<ThemeProps>(({ theme }) => ({
  paddingTop: theme.spacing.middle,
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  gap: theme.spacing.middle,
}));

export const ViewMoresStackDiv = styled.div<ThemeProps>(({ theme }) => ({
  flexBasis: "20%",
}));

export const ViewMoreSectionIcon = styled.img<ThemeProps>(() => ({
  width: "100%",
  cursor: "pointer",
}));
