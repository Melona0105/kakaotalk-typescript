import styled from "styled-components";
import { ThemeProps } from "../../../../utils/theme/theme.interface";

export const SignUpInputBoxesWrapper = styled.div<ThemeProps>(() => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));
