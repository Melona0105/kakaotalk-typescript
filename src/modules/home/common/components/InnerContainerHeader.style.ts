import resetIcon from "assets/icons/button_close.png";
import searchBarIcon from "assets/icons/searchbar_icon.png";
import styled from "styled-components";
import { ThemeProps } from "utils/theme/theme.interface";

const IMAGE_SIZE = 35;
const SEARCH_ICON_SIZE = 25;
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

export const InnerContaienrSearchInputDiv = styled.div<ThemeProps>(
  ({ theme }) => ({
    display: "flex",
    alignItems: "center",
    // padding: theme.spacing.xSmall,
    backgroundColor: theme.colors.gray3,
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

export const InnerContaienrSearchInputIcon = styled.img.attrs(() => ({
  src: searchBarIcon,
}))<ThemeProps>(({ theme }) => ({
  width: SEARCH_ICON_SIZE,
  height: SEARCH_ICON_SIZE,
  paddingRight: theme.spacing.xSmall,
}));

export const InnerContaienrSearchInputClearIcon = styled.img.attrs(() => ({
  src: resetIcon,
}))<ThemeProps>(({ theme }) => ({
  width: CLEAR_ICON_SIZE,
  height: CLEAR_ICON_SIZE,
  paddingRight: theme.spacing.small,
  cursor: "pointer",
}));
