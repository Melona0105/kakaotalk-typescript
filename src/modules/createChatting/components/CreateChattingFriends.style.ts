import styled from "styled-components";
import { ThemeProps } from "utils/theme/theme.interface";

export const CreateChattingFriendsWrapper = styled.div<ThemeProps>(
  ({ theme }) => ({
    paddingTop: theme.spacing.middle,
  })
);
