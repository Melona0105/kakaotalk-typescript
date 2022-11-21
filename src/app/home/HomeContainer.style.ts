import { ThemeProps } from "app/utils/theme/theme.interface";
import styled from "styled-components";

export const HomeContainerWrapper = styled.div<ThemeProps>(({ theme }) => ({
  display: "flex",
  flex: 1,
}));
