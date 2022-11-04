import styled from "styled-components";
import { ThemeProps } from "utils/theme/theme.interface";

export const AddFriendContainerWrapper = styled.div<ThemeProps>(
  ({ theme }) => ({
    flex: 1,
    borderRadius: theme.config.borderRadius,
    padding: theme.spacing.large,
    display: "flex",
    flexDirection: "column",
  })
);
