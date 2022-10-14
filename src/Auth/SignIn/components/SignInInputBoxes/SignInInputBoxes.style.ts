import styled from "styled-components";
import { ThemeProps } from "../../../../utils/theme/theme.interface";

export const SignInInputBoxesWrapper = styled.div<any>(() => ({
  borderRadius: 3,
}));

export const SignInDiv = styled.div<any>(({ theme }: ThemeProps) => ({
  width: 250,
  border: `1px solid ${theme.colors.inActive}`,
}));
