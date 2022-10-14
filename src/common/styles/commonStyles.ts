import { Link } from "react-router-dom";
import styled from "styled-components";
import { ThemeProps } from "../../utils/theme/theme.interface";

export const ButtonStyleLink = styled(Link)<any>(({ theme }: ThemeProps) => ({
  color: theme.colors.kakaoDarkGray,
  fontSize: theme.fontSize.default,
  textAlign: "center",
  flex: 1,
  textDecoration: "none",
}));
