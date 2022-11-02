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

export const FlexDiv = styled.div<ThemeProps>(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));
