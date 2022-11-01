import { Link } from "react-router-dom";
import styled from "styled-components";
import { ThemeProps } from "../../../utils/theme/theme.interface";

export const ButtonStyleLink = styled(Link)<any>(({ theme }: ThemeProps) => ({
  color: theme.colors.kakaoDarkGray,
  fontSize: theme.fontSize.small,
  textAlign: "center",
  flex: 1,
  textDecoration: "none",
}));

export const AppContainerWrapper = styled.div<any>(({ theme }: ThemeProps) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.colors.black,
}));
