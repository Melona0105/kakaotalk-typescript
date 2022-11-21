import { ThemeProps } from "app/utils/theme/theme.interface";
import styled from "styled-components";

export const ProfileCardContainerWrapper = styled.div<ThemeProps>(
  ({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    flex: 1,
    backgroundColor: theme.colors.profileDefault,
    borderRadius: theme.config.borderRadius,
  })
);
