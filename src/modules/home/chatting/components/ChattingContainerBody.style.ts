import styled from "styled-components";
import { ThemeProps } from "utils/theme/theme.interface";

export const ChattingContainerBodyWrapper = styled.div<ThemeProps>(
  ({ theme }) => ({
    flex: 1,
  })
);
