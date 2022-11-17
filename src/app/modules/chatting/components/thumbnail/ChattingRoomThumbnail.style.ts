import { ThemeProps } from "app/utils/theme/theme.interface";
import styled from "styled-components";

const THUMBNAIL_SIZE = 45;

export const ChattingRoomThumbnailWrapper = styled.div<ThemeProps>(
  ({ theme }) => ({
    display: "flex",
    padding: theme.spacing.small,
    paddingLeft: theme.spacing.middle,
    paddingRight: theme.spacing.middle,
    alignItems: "center",

    cursor: "pointer",

    ":hover": {
      backgroundColor: theme.colors.gray3,
    },
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
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: 240,
    maxHeight: 25,
  })
);
