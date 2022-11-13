import { ThemeProps } from "app/utils/theme/theme.interface";
import styled from "styled-components";

const ICON_SIZE = 15;

interface CheckBoxWrapperStyleProps extends ThemeProps {
  showPaddingRight?: boolean;
}

export const CheckBoxWrapper = styled.div<CheckBoxWrapperStyleProps>(
  ({ theme, showPaddingRight = true }) => ({
    paddingRight: showPaddingRight ? theme.spacing.xLarge : 0,
  })
);

interface CheckBoxIconStyleProps extends ThemeProps {
  isSelected: boolean;
}

export const CheckBoxIcon = styled.div<CheckBoxIconStyleProps>(
  ({ theme, isSelected }) => ({
    border: `2px solid ${theme.colors.inActive}`,
    width: ICON_SIZE,
    height: ICON_SIZE,
    borderRadius: 50,
    backgroundColor: isSelected ? theme.colors.kakaoYellow : theme.colors.white,
  })
);
