import { ThemeProps } from "app/utils/theme/theme.interface";
import styled from "styled-components";

export const ChattingRoomBodyWrapper = styled.div<ThemeProps>(({ theme }) => ({
  flex: 1,
  paddingTop: theme.spacing.middle,
  paddingBottom: theme.spacing.middle,
  maxHeight: theme.config.chattingRoomMaxHeight,
  overflowY: "scroll",
}));
