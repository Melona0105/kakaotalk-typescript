import resetIcon from "assets/icons/button_close.png";
import styled from "styled-components";
import { ThemeProps } from "utils/theme/theme.interface";

const CLEAR_ICON_SIZE = 15;

export const AddFriendBodyWrapper = styled.div<ThemeProps>(({ theme }) => ({
  paddingTop: theme.spacing.xLarge,
}));

export const AddFriendBodyTextDiv = styled.div<ThemeProps>(({ theme }) => ({
  borderBottom: `1px solid ${theme.colors.gray}`,
  paddingBottom: theme.spacing.small,
  display: "flex",
  alignItems: "center",
}));

export const AddFriendBodyInput = styled.input<ThemeProps>(({ theme }) => ({
  width: "100%",
  padding: 0,
  outline: 0,
  border: "none",
  fontSize: theme.fontSize.default,
}));

export const AddFriendBodyInputClearIcon = styled.img.attrs(() => ({
  src: resetIcon,
}))<ThemeProps>(({ theme }) => ({
  width: CLEAR_ICON_SIZE,
  height: CLEAR_ICON_SIZE,
  paddingRight: theme.spacing.small,
  cursor: "pointer",
}));

export const AddFriendBodyMyInfoWrapper = styled.div<ThemeProps>(
  ({ theme }) => ({
    paddingTop: theme.spacing.xLarge,
  })
);

export const AddFriendBodyMyInfoDiv = styled.div<ThemeProps>(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: theme.spacing.middle,
  backgroundColor: theme.colors.gray3,
  borderRadius: 5,
  color: theme.colors.gray4,
  fontSize: theme.fontSize.xSmall,
}));
