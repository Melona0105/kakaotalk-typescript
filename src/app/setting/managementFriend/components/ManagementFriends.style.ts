import { ThemeProps } from "app/utils/theme/theme.interface";
import styled from "styled-components";

export const ManagementFriendsWrapper = styled.div<ThemeProps>(({ theme }) => ({
  paddingTop: theme.spacing.xLarge,
}));

export const ManagementFriendsEmptyText = styled.div<ThemeProps>(
  ({ theme }) => ({
    paddingTop: theme.spacing.xxLarge,
    fontSize: theme.fontSize.default,
    textAlign: "center",
  })
);
