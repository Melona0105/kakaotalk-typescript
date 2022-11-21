import { Link } from "react-router-dom";
import styled from "styled-components";
import { ThemeProps } from "../../utils/theme/theme.interface";

export const MainContainerWrapper = styled.div<ThemeProps>(({ theme }) => ({
  display: "flex",
  flex: 1,
}));

export const ButtonStyleLink = styled(Link)<any>(({ theme }: ThemeProps) => ({
  color: theme.colors.kakaoDarkGray,
  fontSize: theme.fontSize.small,
  textAlign: "center",
  flex: 1,
  textDecoration: "none",
}));

export const FlexDiv = styled.div<ThemeProps>(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

export const CloseModalContainerWrapper = styled.div<ThemeProps>(
  ({ theme }) => ({
    flex: 1,
    borderRadius: theme.config.borderRadius,
    padding: theme.spacing.large,
    display: "flex",
    flexDirection: "column",
  })
);

export const CloseButtonStyleWrapper = styled.div<ThemeProps>(({ theme }) => ({
  borderRadius: theme.config.borderRadius,
  flex: 1,
  padding: theme.spacing.middle,
}));
