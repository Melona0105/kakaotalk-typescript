import styled from "styled-components";
import { ThemeProps } from "../../../../utils/theme/theme.interface";

export const SignUpTermsContainerWrapper = styled.div<any>(
  ({ theme }: ThemeProps) => ({
    padding: theme.spacing.xLarge,
    paddingTop: theme.spacing.xxLarge,
    overflowY: "scroll",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  })
);
