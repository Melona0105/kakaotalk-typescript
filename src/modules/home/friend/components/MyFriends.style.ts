import styled from "styled-components";
import { ThemeProps } from "utils/theme/theme.interface";

export const MyFriendsWrapper = styled.div<ThemeProps>(({ theme }) => ({
  borderTop: `1px solid ${theme.colors.gray2}`,
  paddingTop: theme.spacing.middle,
}));

export const MyFriendsDiv = styled.div<ThemeProps>(({ theme }) => ({
  paddingTop: theme.spacing.xSmall,
}));
