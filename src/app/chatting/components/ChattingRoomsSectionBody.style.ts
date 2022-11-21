import { ThemeProps } from "app/utils/theme/theme.interface";
import styled from "styled-components";

export const ChattingRoomsSectionBodyEmptyDiv = styled.div<ThemeProps>(
  ({ theme }) => ({
    flex: 1,
    textAlign: "center",
    paddingTop: theme.spacing.xxLarge * 3,
    fontSize: theme.fontSize.small,
    lineHeight: 1.5
  })
);
