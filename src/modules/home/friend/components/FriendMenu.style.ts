import { CSSProperties } from "react";
import styled from "styled-components";
import { ThemeProps } from "utils/theme/theme.interface";

interface FriendMenuWrapperStyleProps extends ThemeProps {
  top: CSSProperties["top"];
  left: CSSProperties["left"];
}

export const FriendMenuWrapper = styled.div<FriendMenuWrapperStyleProps>(
  ({ theme, top, left }) => ({
    position: "absolute",
    top,
    left,
    backgroundColor: theme.colors.gray3,
    borderRadius: 10,
    border: `1px solid ${theme.colors.gray}`,
  })
);

export const FriendMunuItemDiv = styled.div<ThemeProps>(({ theme }) => ({
  paddingRight: theme.spacing.xSmall,
  paddingLeft: theme.spacing.xSmall,
  borderRadius: 5,
  cursor: "pointer",

  ":hover": {
    backgroundColor: theme.colors.kakaoDarkGray,
    color: theme.colors.white,
  },
}));

interface FriendMunuItemStyleProps extends ThemeProps {
  showBorderBottom: boolean;
}

export const FriendMunuItem = styled.div<FriendMunuItemStyleProps>(
  ({ theme, showBorderBottom }) => ({
    paddingRight: theme.spacing.xSmall,
    paddingLeft: theme.spacing.xSmall,
    paddingTop: theme.spacing.small,
    paddingBottom: theme.spacing.small,
    borderBottomWidth: showBorderBottom ? 1 : 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomStyle: "solid",

    ":hover": {
      borderBottomWidth: 0,
    },
  })
);
