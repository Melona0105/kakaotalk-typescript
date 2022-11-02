import styled from "styled-components";
import { ThemeProps } from "utils/theme/theme.interface";

export const InnerContaienrWrapper = styled.div<ThemeProps>(({ theme }) => ({
  flex: 1,
  padding: theme.spacing.large,
  paddingTop: theme.spacing.small,
}));
