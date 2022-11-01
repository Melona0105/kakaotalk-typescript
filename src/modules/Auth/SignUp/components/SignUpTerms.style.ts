import styled from "styled-components";
import { ThemeProps } from "../../../../utils/theme/theme.interface";

export const SignUpTermsWrapper = styled.div<ThemeProps>(({ theme }) => ({
  paddingBottom: theme.spacing.xLarge,
}));

export const SignUpTermsHeader = styled.div<ThemeProps>(({ theme }) => ({
  fontSize: theme.fontSize.large,
  paddingTop: theme.spacing.xLarge,
  paddingBottom: theme.spacing.xLarge,
}));

interface SignUpTermsDivStyleProps extends ThemeProps {
  showBottomborder: boolean;
}

export const SignUpTermsDiv = styled.div<SignUpTermsDivStyleProps>(
  ({ theme, showBottomborder }) => ({
    display: "flex",
    marginBottom: theme.spacing.large,
    borderBottom: showBottomborder
      ? `1px solid ${theme.colors.inActive}`
      : undefined,
    paddingBottom: showBottomborder ? 20 : 0,
    cursor: "pointer",
  })
);

export const SignUpTermsIconDiv = styled.div<ThemeProps>(({ theme }) => ({
  width: theme.spacing.xxLarge,
}));

interface SignUpTermsIconStyleProps extends ThemeProps {
  isSelected: boolean;
}

export const SignUpTermsIcon = styled.div<SignUpTermsIconStyleProps>(
  ({ theme, isSelected }) => ({
    border: `2px solid ${theme.colors.inActive}`,
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: isSelected ? theme.colors.kakaoYellow : theme.colors.white,
  })
);

export const SignUpTermsTextDiv = styled.div<ThemeProps>(({ theme }) => ({
  paddingLeft: theme.spacing.middle,
  flex: 1,
}));

export const SignUpTermsTitle = styled.div<ThemeProps>(({ theme }) => ({
  fontSize: theme.fontSize.large,
}));

export const SignUpTermsPhrase = styled.div<ThemeProps>(({ theme }) => ({
  paddingTop: theme.spacing.xSmall,
  color: theme.colors.gray,
  fontSize: theme.fontSize.small,
}));
