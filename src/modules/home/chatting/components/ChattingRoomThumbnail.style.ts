import styled from "styled-components";
import { ThemeProps } from "utils/theme/theme.interface";

const THUMBNAIL_SIZE = 45;

export const ChattingRoomThumbnailWrapper = styled.div<ThemeProps>(
  ({ theme }) => ({
    display: "flex",
    padding: theme.spacing.small,
    paddingLeft: 0,
    alignItems: "center",
  })
);

export const ChattingRoomThumbnailImage = styled.img<ThemeProps>(() => ({
  width: THUMBNAIL_SIZE,
  height: THUMBNAIL_SIZE,
  borderRadius: 20,
}));

export const ChattingRoomThumbnailRightDiv = styled.div<ThemeProps>(
  ({ theme }) => ({
    flex: 1,
    paddingLeft: theme.spacing.small,
  })
);

export const ChattingRoomThumbnailTopDiv = styled.div<ThemeProps>(
  ({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: theme.spacing.xSmall,
  })
);

export const ChattingRoomThumbnailUsername = styled.div<ThemeProps>(
  ({ theme }) => ({
    fontSize: theme.spacing.middle,
  })
);

export const ChattingRoomThumbnailTimeStamp = styled.div<ThemeProps>(
  ({ theme }) => ({
    fontSize: theme.spacing.small,
    color: theme.colors.gray,
  })
);

export const ChattingRoomThumbnailText = styled.div<ThemeProps>(
  ({ theme }) => ({
    fontSize: theme.spacing.middle * 0.9,
    color: theme.colors.gray,
  })
);
