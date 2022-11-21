import { ThemeProps } from "app/utils/theme/theme.interface";
import styled from "styled-components";

const GO_BACK_ICON_SIZE = 30;

export const ChattingRoomHeaderWrapper = styled.div<ThemeProps>(
  ({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing.middle,
    fontSize: theme.spacing.large,
  })
);

export const ChattingRoomHeaderIcon = styled.img<ThemeProps>(({ theme }) => ({
  width: GO_BACK_ICON_SIZE,
  height: GO_BACK_ICON_SIZE,
  cursor: "pointer",
}));
