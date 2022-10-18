import styled from "styled-components";
import { ThemeProps } from "../../../../utils/theme/theme.interface";

export const SignUpTermsWrapper = styled.div<any>(({ theme }: ThemeProps) => ({
  paddingBottom: theme.spacing.xLarge,
}));

export const SignUpTermsHeader = styled.div<any>(({ theme }: ThemeProps) => ({
  fontSize: theme.fontSize.large,
  paddingTop: theme.spacing.xLarge,
  paddingBottom: theme.spacing.xLarge,
}));

interface SignUpTermsDivStyleProps extends ThemeProps {
  showBottomborder: boolean;
}

export const SignUpTermsDiv = styled.div<any>(
  ({ theme, showBottomborder }: SignUpTermsDivStyleProps) => ({
    display: "flex",
    marginBottom: theme.spacing.large,
    borderBottom: showBottomborder
      ? `1px solid ${theme.colors.inActive}`
      : undefined,
    paddingBottom: showBottomborder ? 20 : 0,
    cursor: "pointer",
  })
);

export const SignUpTermsIconDiv = styled.div<any>(({ theme }: ThemeProps) => ({
  width: theme.spacing.xxLarge,
}));

interface SignUpTermsIconStyleProps extends ThemeProps {
  isSelected: boolean;
}

export const SignUpTermsIcon = styled.div<any>(
  ({ theme, isSelected }: SignUpTermsIconStyleProps) => ({
    border: `2px solid ${theme.colors.inActive}`,
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: isSelected ? theme.colors.kakaoYellow : theme.colors.white,
  })
);

export const SignUpTermsTextDiv = styled.div<any>(({ theme }: ThemeProps) => ({
  paddingLeft: theme.spacing.middle,
  flex: 1,
}));

export const SignUpTermsTitle = styled.div<any>(({ theme }: ThemeProps) => ({
  fontSize: theme.fontSize.large,
}));

export const SignUpTermsPhrase = styled.div<any>(({ theme }: ThemeProps) => ({
  paddingTop: theme.spacing.xSmall,
  color: theme.colors.gray,
  fontSize: theme.fontSize.small,
}));
