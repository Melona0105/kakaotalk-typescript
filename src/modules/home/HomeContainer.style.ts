import styled from "styled-components";
import { ThemeProps } from "utils/theme/theme.interface";

export const HomeContainerWrapper = styled.div<ThemeProps>(({ theme }) => ({
  display: "flex",
  flex: 1,
}));
