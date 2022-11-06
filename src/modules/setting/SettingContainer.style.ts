import styled from "styled-components";
import { ThemeProps } from "utils/theme/theme.interface";

export const SettingContainerWrapper = styled.div<ThemeProps>(({ theme }) => ({
  borderRadius: theme.config.borderRadius,
  flex: 1,
  padding: theme.spacing.middle,
}));
