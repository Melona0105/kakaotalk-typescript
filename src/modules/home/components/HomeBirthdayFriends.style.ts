import styled from "styled-components";
import { ThemeProps } from "utils/theme/theme.interface";

export const HomeBirthdayFriendsWrapper = styled.div<ThemeProps>(({ theme }) => ({
  borderTop: `1px solid ${theme.colors.gray2}`,
  padding: theme.spacing.small,
  paddingLeft: 0,
  paddingRight: 0,
}));
