import { ThemeProps } from "app/utils/theme/theme.interface";
import styled from "styled-components";

export const HomeBirthdayFriendsWrapper = styled.div<ThemeProps>(({ theme }) => ({
  borderTop: `1px solid ${theme.colors.gray2}`,
  padding: theme.spacing.small,
  paddingLeft: 0,
  paddingRight: 0,
}));
