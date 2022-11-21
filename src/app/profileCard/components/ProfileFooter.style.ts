import { ThemeProps } from "app/utils/theme/theme.interface";
import styled from "styled-components";

const FOOTER_IMAGE_SIZE = 45;

interface ProfileFooterWrapperStyleProps extends ThemeProps {
  showBorderTop: boolean;
}

export const ProfileFooterWrapper = styled.div<ProfileFooterWrapperStyleProps>(
  ({ theme, showBorderTop }) => ({
    borderTop: `1px solid ${theme.colors.gray}`,
    borderTopWidth: showBorderTop ? 1 : 0,
    display: "flex",
    paddingTop: theme.spacing.xLarge,
    paddingBottom: theme.spacing.xxLarge,
    justifyContent: "space-around",
  })
);

export const ProfileFooterDiv = styled.div<ThemeProps>(({ theme }) => ({
  textAlign: "center",
  color: theme.colors.white,
  fontSize: theme.fontSize.xSmall,
  cursor: "pointer",
}));

export const ProfileFooterImage = styled.img<ThemeProps>(({ theme }) => ({
  width: FOOTER_IMAGE_SIZE,
  height: FOOTER_IMAGE_SIZE,
}));
