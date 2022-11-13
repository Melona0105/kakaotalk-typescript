import { FlexDiv } from "app/modules/common/styles/commonStyles";
import { ThemeProps } from "app/utils/theme/theme.interface";
import styled from "styled-components";

const TOGGLE_BOX_IMAGE_SIZE = 20;

export const HomeToggleBoxDiv = styled(FlexDiv)(({ theme }) => ({
  justifyContent: "space-between",
  paddingRight: theme.spacing.middle,
}));

export const HomeToggleBoxText = styled.div<ThemeProps>(({ theme }) => ({
  fontSize: theme.fontSize.small,
  color: theme.colors.gray,
  paddingLeft: theme.spacing.middle,
}));

export const HomeToggleBoxImage = styled.img<ThemeProps>(({ theme }) => ({
  width: TOGGLE_BOX_IMAGE_SIZE,
  height: TOGGLE_BOX_IMAGE_SIZE,
  cursor: "pointer",
}));
