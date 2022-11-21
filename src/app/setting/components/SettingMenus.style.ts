import { ThemeProps } from "app/utils/theme/theme.interface";
import styled from "styled-components";

export const SettingMenusDiv = styled.div<ThemeProps>(({ theme }) => ({
  paddingTop: theme.spacing.xLarge,
  paddingBottom: theme.spacing.xLarge,
  borderBottom: `1px solid ${theme.colors.gray2}`,
}));

export const SettingMenusTitle = styled.div<ThemeProps>(({ theme }) => ({
  fontSize: theme.fontSize.small,
  paddingBottom: theme.spacing.small,
}));

export const SettingMenusItemTitle = styled.div<ThemeProps>(({ theme }) => ({
  fontSize: theme.fontSize.default,
  paddingTop: theme.spacing.middle,
  cursor: "pointer",
}));

export const SettingMenusItemPhrase = styled.div<ThemeProps>(({ theme }) => ({
  fontSize: theme.fontSize.small,
  color: theme.colors.gray,
  paddingTop: theme.spacing.small,
}));
