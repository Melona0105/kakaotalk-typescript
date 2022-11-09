import styled from "styled-components";
import { ThemeProps } from "utils/theme/theme.interface";

export const ChattingRoomContainerWrapper = styled.div<ThemeProps>(
  ({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.colors.chattingDefault,
    borderRadius: theme.config.borderRadius,
    flex: 1,
  })
);
