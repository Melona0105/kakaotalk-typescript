import styled from "styled-components";
import { ThemeProps } from "utils/theme/theme.interface";

const THUMBNAIL_IMAGE_SIZE = 45;

export const MyProfileThumbnailWrapper = styled.div<ThemeProps>(
  ({ theme }) => ({
    paddingTop: theme.spacing.middle,
    paddingBottom: theme.spacing.middle,
    display: "flex",
    cursor: "pointer",
  })
);

export const MyProfileThumbnailImage = styled.img<ThemeProps>(({ theme }) => ({
  width: THUMBNAIL_IMAGE_SIZE,
  height: THUMBNAIL_IMAGE_SIZE,
  borderRadius: 15,
  objectFit: "cover",
}));

export const MyProfileThumbnailDiv = styled.div<ThemeProps>(({ theme }) => ({
  flex: 1,
  paddingLeft: theme.spacing.middle,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const MyProfileThumbnailName = styled.div<ThemeProps>(({ theme }) => ({
  fontSize: theme.fontSize.small,
  border: "1px solid red",
  maxWidth: theme.spacing.xLarge * 4.5,
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
}));
