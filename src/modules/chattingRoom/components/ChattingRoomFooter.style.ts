import addIcon from "assets/icons/chatting_add_icon.png";
import styled from "styled-components";
import { ThemeProps } from "utils/theme/theme.interface";

const ADD_ICON_SIZE = 35;

export const ChattingRoomFooterWrapper = styled.div<ThemeProps>(
  ({ theme }) => ({
    backgroundColor: theme.colors.white,
    display: "flex",
    paddingTop: theme.spacing.xSmall,
    paddingBottom: theme.spacing.xSmall,
    paddingRight: theme.spacing.small,
  })
);

export const ChattingRoomFooterAddIcon = styled.img.attrs(() => ({
  src: addIcon,
}))<ThemeProps>(() => ({
  width: ADD_ICON_SIZE,
  height: ADD_ICON_SIZE,
}));

export const ChattingRoomFooterInputDiv = styled.div<ThemeProps>(
  ({ theme }) => ({
    display: "flex",
    flex: 1,
    border: `1px solid ${theme.colors.gray}`,
    borderRadius: 15,
    padding: theme.spacing.xSmall,
    paddingLeft: theme.spacing.middle,
  })
);

export const ChattingRoomFooterInput = styled.input<ThemeProps>(() => ({
  flex: 1,
  outline: "none",
  border: "none",
}));
