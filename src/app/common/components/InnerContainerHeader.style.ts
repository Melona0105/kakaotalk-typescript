import { ThemeProps } from "app/utils/theme/theme.interface";
import resetIcon from "assets/icons/button_close.png";
import styled from "styled-components";

const IMAGE_SIZE = 35;
const CLEAR_ICON_SIZE = 15;

export const InnerContainerHeaderWrapper = styled.div<ThemeProps>(
  ({ theme }) => ({
    paddingLeft: theme.spacing.large,
    paddingRight: theme.spacing.middle,
  })
);

export const InnerContainerHeaderDiv = styled.div<ThemeProps>(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

interface InnerContaienrHeaderTitleStyleProps extends ThemeProps {
  showPaddingTop?: boolean;
}

export const InnerContaienrHeaderTitle =
  styled.div<InnerContaienrHeaderTitleStyleProps>(
    ({ theme, showPaddingTop }) => ({
      fontSize: theme.fontSize.default,
      fontWeight: "bold",
      paddingTop: showPaddingTop ? theme.spacing.middle : 0,
    })
  );

interface InnerContaienrHeaderImageStyleProps extends ThemeProps {
  visiblity: boolean;
  showMarginRight?: boolean;
}

export const InnerContaienrHeaderImage =
  styled.img<InnerContaienrHeaderImageStyleProps>(
    ({ theme, visiblity, showMarginRight }) => ({
      width: IMAGE_SIZE,
      height: IMAGE_SIZE,
      cursor: "pointer",
      display: visiblity ? "inline" : "none",
      marginRight: showMarginRight ? theme.spacing.xSmall : 0,
    })
  );

export const InnerContaienrSearchInput = styled.input<ThemeProps>(
  ({ theme }) => ({
    flex: 1,
    paddingRight: 0,
    border: "none",
    outline: "none",
    backgroundColor: theme.colors.gray3,
  })
);

export const InnerContaienrSearchInputClearIcon = styled.img.attrs(() => ({
  src: resetIcon,
}))<ThemeProps>(({ theme }) => ({
  width: CLEAR_ICON_SIZE,
  height: CLEAR_ICON_SIZE,
  paddingRight: theme.spacing.small,
  cursor: "pointer",
}));
