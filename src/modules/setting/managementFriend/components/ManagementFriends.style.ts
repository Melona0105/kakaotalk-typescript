import styled from "styled-components";
import { ThemeProps } from "utils/theme/theme.interface";

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
