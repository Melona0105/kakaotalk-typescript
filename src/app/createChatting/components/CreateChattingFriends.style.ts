import { ThemeProps } from "app/utils/theme/theme.interface";
import styled from "styled-components";

export const CreateChattingFriendsWrapper = styled.div<ThemeProps>(
  ({ theme }) => ({
    paddingTop: theme.spacing.middle,
  })
);
