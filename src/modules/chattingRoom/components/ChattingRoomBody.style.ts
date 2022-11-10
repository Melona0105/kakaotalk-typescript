import styled from "styled-components";
import { ThemeProps } from "utils/theme/theme.interface";

export const ChattingRoomBodyWrapper = styled.div<ThemeProps>(({ theme }) => ({
  flex: 1,
  paddingTop: theme.spacing.middle,
  paddingBottom: theme.spacing.middle,
}));
