import styled from "styled-components";
import { ThemeProps } from "utils/theme/theme.interface";

const IMAGE_SIZE = 40;

export const InnerContainerHeaderWrapper = styled.div<ThemeProps>(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

interface InnerContaienrHeaderTitleStyleProps extends ThemeProps {
  showPaddingTop: boolean;
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
  showMarginRight: boolean;
  visiblity: boolean;
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
