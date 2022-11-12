import styled from "styled-components";
import { ThemeProps } from "utils/theme/theme.interface";

const TEXT_MAT_WIDTH = 80;
const THUMBNAIL_IMAGE_SIZE = 45;

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

export const FriendProfileThumbnailImage = styled.img<ThemeProps>(
  ({ theme }) => ({
    width: THUMBNAIL_IMAGE_SIZE,
    height: THUMBNAIL_IMAGE_SIZE,
    marginTop: theme.spacing.xSmall,
    marginBottom: theme.spacing.xSmall,
    marginRight: theme.spacing.small,
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
