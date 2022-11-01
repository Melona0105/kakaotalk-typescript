import styled from "styled-components";
import { ThemeProps } from "../../../../utils/theme/theme.interface";

export const SignUpTermsContainerWrapper = styled.div<ThemeProps>(
  ({ theme }) => ({
    padding: theme.spacing.xLarge,
    paddingTop: theme.spacing.xxLarge,
    overflowY: "scroll",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  })
);
