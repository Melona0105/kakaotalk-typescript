import styled from "styled-components";
import { ThemeProps } from "utils/theme/theme.interface";

const THUMBNAIL_IMAGE_SIZE = 45;

export const HomeMyProfileThumbnailWrapper = styled.div<ThemeProps>(
  ({ theme }) => ({
    padding: theme.spacing.large,
    paddingTop: theme.spacing.middle,
    paddingBottom: theme.spacing.middle,
    display: "flex",
    cursor: "pointer",

    ":hover": {
      backgroundColor: theme.colors.gray3,
    },
  })
);

export const HomeMyProfileThumbnailImage = styled.img<ThemeProps>(({ theme }) => ({
  width: THUMBNAIL_IMAGE_SIZE,
  height: THUMBNAIL_IMAGE_SIZE,
  borderRadius: 15,
  objectFit: "cover",
}));

export const HomeMyProfileThumbnailDiv = styled.div<ThemeProps>(({ theme }) => ({
  flex: 1,
  paddingLeft: theme.spacing.middle,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const HomeMyProfileThumbnailName = styled.div<ThemeProps>(({ theme }) => ({
  fontSize: theme.fontSize.small,
  maxWidth: theme.spacing.xLarge * 4.5,
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
}));
