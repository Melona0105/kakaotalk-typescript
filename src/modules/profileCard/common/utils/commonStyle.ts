import styled from "styled-components";
import { ThemeProps } from "utils/theme/theme.interface";

export const ProfileCardContainerWrapper = styled.div<ThemeProps>(
  ({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    flex: 1,
    backgroundColor: theme.colors.profileDefault,
    borderRadius: theme.config.borderRadius,
  })
);
