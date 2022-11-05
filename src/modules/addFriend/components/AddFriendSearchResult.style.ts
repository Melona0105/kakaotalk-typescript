import styled from "styled-components";
import { ThemeProps } from "utils/theme/theme.interface";

const IMAGE_SIZE = 60;

export const AddFriendSearchResultWrapper = styled.div<ThemeProps>(
  ({ theme }) => ({
    backgroundColor: theme.colors.gray3,
    borderRadius: 5,
    paddingTop: theme.spacing.xLarge,
    paddingBottom: theme.spacing.xLarge,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  })
);

export const AddFriendSearchResultImage = styled.img<ThemeProps>(() => ({
  width: IMAGE_SIZE,
  height: IMAGE_SIZE,
  borderRadius: 25,
  objectFit: "cover",
}));

export const AddFriendSearchResultText = styled.div<ThemeProps>(
  ({ theme }) => ({
    fontSize: theme.fontSize.small,
    paddingTop: theme.spacing.middle,
    textAlign: "center",
  })
);
