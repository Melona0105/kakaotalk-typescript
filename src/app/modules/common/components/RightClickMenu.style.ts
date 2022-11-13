import { ThemeProps } from "app/utils/theme/theme.interface";
import { CSSProperties } from "react";
import styled from "styled-components";

interface RightClickMenuWrapperStyleProps extends ThemeProps {
  top: CSSProperties["top"];
  left: CSSProperties["left"];
}

export const RightClickMenuWrapper =
  styled.div<RightClickMenuWrapperStyleProps>(({ theme, top, left }) => ({
    position: "absolute",
    top,
    left,
    backgroundColor: theme.colors.gray3,
    borderRadius: 10,
    border: `1px solid ${theme.colors.gray}`,
  }));

export const RightClickMenuDiv = styled.div<ThemeProps>(({ theme }) => ({
  paddingRight: theme.spacing.xSmall,
  paddingLeft: theme.spacing.xSmall,
  borderRadius: 5,
  cursor: "pointer",

  ":hover": {
    backgroundColor: theme.colors.kakaoDarkGray,
    color: theme.colors.white,
  },
}));

interface RightClickMenuStyleProps extends ThemeProps {
  showBorderBottom: boolean;
}

export const RightClickMenuItem = styled.div<RightClickMenuStyleProps>(
  ({ theme, showBorderBottom }) => ({
    padding: theme.spacing.small,
    paddingRight: theme.spacing.xSmall,
    paddingLeft: theme.spacing.xSmall,
    borderBottomWidth: showBorderBottom ? 1 : 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomStyle: "solid",
    fontSize: theme.fontSize.small,

    ":hover": {
      borderBottomWidth: 0,
    },
  })
);
