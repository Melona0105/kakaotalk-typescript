import { ThemeProps } from "app/utils/theme/theme.interface";
import styled from "styled-components";

const TEXT_MAT_WIDTH = 80;
const THUMBNAIL_IMAGE_SIZE = 45;
const DEFAULT_THUMBNAIL_IMAGE_SIZE = 50;

interface FriendProfileThumbnailWrapperStyleProps extends ThemeProps {
  hoverEnabled?: boolean;
}

export const FriendProfileThumbnailWrapper =
  styled.div<FriendProfileThumbnailWrapperStyleProps>(
    ({ theme, hoverEnabled = true }) => ({
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      paddingLeft: hoverEnabled ? theme.spacing.middle : 0,
      cursor: "pointer",

      ":hover": {
        backgroundColor: hoverEnabled ? theme.colors.gray3 : "none",
      },
    })
  );

interface FriendProfileThumbnailImageStyleProps extends ThemeProps {
  showDefaultImage?: boolean;
}

export const FriendProfileThumbnailImage =
  styled.img<FriendProfileThumbnailImageStyleProps>(
    ({ theme, showDefaultImage }) => ({
      width: showDefaultImage
        ? DEFAULT_THUMBNAIL_IMAGE_SIZE
        : THUMBNAIL_IMAGE_SIZE,
      height: showDefaultImage
        ? DEFAULT_THUMBNAIL_IMAGE_SIZE
        : THUMBNAIL_IMAGE_SIZE,
      marginTop: theme.spacing.xSmall,
      marginBottom: theme.spacing.xSmall,
      marginRight: theme.spacing.small,
      marginLeft: showDefaultImage ? 0 : theme.spacing.xxSmall,
      borderRadius: 15,
      objectFit: "cover",
    })
  );

interface FriendProfileThumbnailTextStyleProps extends ThemeProps {
  showBirthDay: boolean;
}

export const FriendProfileThumbnailText =
  styled.div<FriendProfileThumbnailTextStyleProps>(
    ({ theme, showBirthDay }) => ({
      fontSize: theme.fontSize.small,
      maxWidth: showBirthDay ? undefined : TEXT_MAT_WIDTH,
      display: showBirthDay ? "flex" : "inline",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
    })
  );

export const FriendProfileThumbnailCount = styled.div<ThemeProps>(
  ({ theme }) => ({
    color: theme.colors.gray,
    paddingLeft: theme.spacing.small,
  })
);
