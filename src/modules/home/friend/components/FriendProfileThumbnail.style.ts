import styled from "styled-components";
import { ThemeProps } from "utils/theme/theme.interface";

const TEXT_MAT_WIDTH = 80;
const THUMBNAIL_IMAGE_SIZE = 45;

export const FriendProfileThumbnailWrapper = styled.div<ThemeProps>(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const FriendProfileThumbnailImage = styled.img<ThemeProps>(
  ({ theme }) => ({
    width: THUMBNAIL_IMAGE_SIZE,
    height: THUMBNAIL_IMAGE_SIZE,
    paddingTop: theme.spacing.xSmall,
    paddingBottom: theme.spacing.xSmall,
    paddingRight: theme.spacing.small,
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
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      overflow: "hidden",
      display: "flex",
    })
  );

export const FriendProfileThumbnailCount = styled.div<ThemeProps>(
  ({ theme }) => ({
    color: theme.colors.gray,
    paddingLeft: theme.spacing.small,
  })
);
