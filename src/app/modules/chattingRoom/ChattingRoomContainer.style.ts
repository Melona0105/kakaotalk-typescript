import { ThemeProps } from "app/utils/theme/theme.interface";
import styled from "styled-components";

export const ChattingRoomContainerWrapper = styled.div<ThemeProps>(
  ({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.colors.chattingDefault,
    borderRadius: theme.config.borderRadius,
    flex: 1,
  })
);
