import styled from "styled-components";
import { ThemeProps } from "utils/theme/theme.interface";

export const ProfileCardContainerWrapper = styled.div<ThemeProps>(
  ({ theme }) => ({
    padding: theme.spacing.middle,
  })
);
