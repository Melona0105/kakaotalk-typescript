import addIcon from "assets/icons/chatting_add_icon.png";
import submitIcon from "assets/icons/chatting_submit.png";
import styled from "styled-components";
import { ThemeProps } from "utils/theme/theme.interface";

const ADD_ICON_SIZE = 35;
const SUBMIT_ICON_SIZE = 20;

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

export const ChattingRoomFooterSubmitIcon = styled.img.attrs(() => ({
  src: submitIcon,
}))<ThemeProps>(({ theme }) => ({
  width: SUBMIT_ICON_SIZE,
  height: SUBMIT_ICON_SIZE,
  borderRadius: SUBMIT_ICON_SIZE * 2,
  padding: theme.spacing.xxSmall,
  backgroundColor: theme.colors.kakaoYellow,
  cursor: "pointer",
}));
