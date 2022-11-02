import { FlexDiv } from "modules/common/styles/commonStyles";
import styled from "styled-components";
import { ThemeProps } from "utils/theme/theme.interface";

const TOGGLE_BOX_IMAGE_SIZE = 20;

export const ToggleBoxDiv = styled(FlexDiv)(({ theme }) => ({
  justifyContent: "space-between",
}));

export const ToggleBoxText = styled.div<ThemeProps>(({ theme }) => ({
  fontSize: theme.fontSize.small,
  color: theme.colors.gray,
}));

export const ToggleBoxImage = styled.img<ThemeProps>(({ theme }) => ({
  width: TOGGLE_BOX_IMAGE_SIZE,
  height: TOGGLE_BOX_IMAGE_SIZE,
  cursor: "pointer",
}));
