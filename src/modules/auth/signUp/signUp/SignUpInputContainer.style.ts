import styled from "styled-components";
import { ThemeProps } from "../../../../utils/theme/theme.interface";

export const SignUpInputContainerWrapper = styled.div<ThemeProps>(
  ({ theme }) => ({
    padding: theme.spacing.xLarge,
    paddingTop: theme.spacing.xxLarge,
    flex: 1,
    display: "flex",
    flexDirection: "column",
  })
);
