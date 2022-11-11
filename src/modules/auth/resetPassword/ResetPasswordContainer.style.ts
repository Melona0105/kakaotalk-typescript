import styled from "styled-components";
import { ThemeProps } from "utils/theme/theme.interface";

export const ResetPasswordContainerWrapper = styled.div<ThemeProps>(
  ({ theme }) => ({
    flex: 1,
    borderRadius: theme.config.borderRadius,
    paddingTop: theme.spacing.xxLarge,
  })
);

export const ResetPasswordContainerHeader = styled.div<ThemeProps>(
  ({ theme }) => ({
    fontSize: theme.fontSize.xxLarge,
    textAlign: "center",
    paddingBottom: theme.spacing.xxLarge,
  })
);

export const ResetPasswordContainerDiv = styled.div<ThemeProps>(
  ({ theme }) => ({
    paddingRight: theme.spacing.large,
    paddingLeft: theme.spacing.large,
  })
);

export const ResetPasswordContainerText = styled.div<ThemeProps>(
  ({ theme }) => ({
    fontSize: theme.fontSize.default,
    paddingBottom: theme.spacing.xxLarge,
    textAlign: "center",
  })
);
