import { ThemeProps } from "app/utils/theme/theme.interface";
import editIcon from "assets/icons/profile_edit.png";
import styled from "styled-components";

const IMAGE_SIZE = 85;

export const ProfileBodyWrapper = styled.div<ThemeProps>(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "center",
  paddingBottom: theme.spacing.xxLarge,
  gap: theme.spacing.middle,
  color: theme.colors.white,
  fontSize: theme.fontSize.default,
  paddingRight: theme.spacing.xLarge,
  paddingLeft: theme.spacing.xLarge,
}));

interface ProfileBodyImageStyleProps extends ThemeProps {
  source: string;
  isEditMode?: boolean;
}

export const ProfileBodyImage = styled.div<ProfileBodyImageStyleProps>(
  ({ theme, source, isEditMode }) => ({
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    backgroundImage: `url(${source})`,
    backgroundSize: 85,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: theme.fontSize.small,
    borderRadius: 35,
    cursor: isEditMode ? "pointer" : "auto",
  })
);

export const ProfileBodyEditDiv = styled.div<ThemeProps>(({ theme }) => ({
  position: "relative",
  borderBottom: `1px solid ${theme.colors.gray}`,
  display: "flex",
  width: "100%",
  justifyContent: "center",
  paddingBottom: theme.spacing.small,
}));

export const ProfileBodyEditIcon = styled.img.attrs(() => ({
  src: editIcon,
}))<ThemeProps>(({ theme }) => ({
  width: 20,
  height: 20,
  position: "absolute",
  right: 0,
}));

export const ProfileBodyTextInput = styled.input<ThemeProps>(({ theme }) => ({
  backgroundColor: "transparent",
  outline: "none",
  border: "none",
  textAlign: "center",
  color: theme.colors.white,
  width: "100%",
  "::placeholder": {
    color: theme.colors.white,
  },
}));

interface ProfileBodyUsernameStyleProps extends ThemeProps {
  showPaddingBottom?: boolean;
}

export const ProfileBodyUsername = styled.div<ProfileBodyUsernameStyleProps>(
  ({ theme, showPaddingBottom }) => ({
    textAlign: "center",
    paddingBottom: showPaddingBottom ? theme.spacing.xSmall : 0,
  })
);

export const ProfileBodySummary = styled.div<ThemeProps>(({ theme }) => ({
  textAlign: "center",
  fontSize: theme.fontSize.small,
}));
