import styled from "styled-components";
import { ThemeProps } from "utils/theme/theme.interface";

export const HomeMyFriendsWrapper = styled.div<ThemeProps>(({ theme }) => ({
  borderTop: `1px solid ${theme.colors.gray2}`,
  paddingTop: theme.spacing.middle,
  paddingBottom: theme.spacing.xSmall,
}));
