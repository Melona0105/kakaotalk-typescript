import styled from "styled-components";
import { ThemeProps } from "utils/theme/theme.interface";

export const FriendContainerBodyWrapper = styled.div<ThemeProps>(
  ({ theme }) => ({
    maxHeight: theme.config.innerContentHeight,
    overflowY: "scroll",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  })
);
