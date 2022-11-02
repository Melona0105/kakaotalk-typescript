import styled from "styled-components";
import { ThemeProps } from "utils/theme/theme.interface";

export const BirthdayFriendsWrapper = styled.div<ThemeProps>(({ theme }) => ({
  borderTop: `1px solid ${theme.colors.gray2}`,
  padding: theme.spacing.small,
  paddingLeft: theme.spacing.xSmall,
  paddingRight: 0,
}));

export const BirthdayFriendsText = styled.div<ThemeProps>(({ theme }) => ({
  fontSize: theme.fontSize.small,
  color: theme.colors.gray,
}));
