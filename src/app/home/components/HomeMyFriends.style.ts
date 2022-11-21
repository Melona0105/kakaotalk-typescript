import { ThemeProps } from "app/utils/theme/theme.interface";
import styled from "styled-components";

export const HomeMyFriendsWrapper = styled.div<ThemeProps>(({ theme }) => ({
  borderTop: `1px solid ${theme.colors.gray2}`,
  paddingTop: theme.spacing.middle,
  paddingBottom: theme.spacing.xSmall,
}));
