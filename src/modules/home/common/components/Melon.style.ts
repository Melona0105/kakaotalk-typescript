import styled from "styled-components";
import { ThemeProps } from "utils/theme/theme.interface";
import playIcon from "assets/icons/melon_play.png";

const MELON_ICON_SIZE = 13;

export const MelonWrapper = styled.div<ThemeProps>(({ theme }) => ({
  border: "1px solid #04cd3b",
  borderRadius: 100,
  padding: theme.spacing.xSmall,
  paddingLeft: theme.spacing.small,
  paddingRight: theme.spacing.small,
  maxWidth: 120,
  display: "flex",
  cursor: "pointer",
}));

export const MelonText = styled.div<ThemeProps>(({ theme }) => ({
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
  flex: 1,
  fontSize: theme.fontSize.xSmall,
}));

export const MelonIcon = styled.img.attrs(() => ({
  src: playIcon,
}))<ThemeProps>(() => ({
  width: MELON_ICON_SIZE,
  height: MELON_ICON_SIZE,
}));
