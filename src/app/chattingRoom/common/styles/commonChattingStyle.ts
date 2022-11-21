import { ThemeProps } from "app/utils/theme/theme.interface";
import styled from "styled-components";

interface ChatStyleProps extends ThemeProps {
  isMine?: boolean;
}

const IMAGE_SIZE = 40;

export const ChatWrapper = styled.div<ChatStyleProps>(({ theme, isMine }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: isMine ? "flex-end" : "flex-start",
  fontSize: theme.fontSize.small,
  paddingRight: isMine ? theme.spacing.middle : 0,
  paddingLeft: !isMine ? theme.spacing.middle : 0,
}));

export const ChatFriendDiv = styled.div<ThemeProps>(({ theme }) => ({
  display: "flex",
  gap: theme.spacing.middle,
}));

export const ChatUsername = styled.div<ThemeProps>(({ theme }) => ({
  paddingBottom: theme.spacing.small,
}));

export const ChatMessageDiv = styled.div<ChatStyleProps>(
  ({ theme, isMine }) => ({
    paddingBottom: theme.spacing.middle,
    display: "flex",
    justifyContent: isMine ? "flex-end" : "flex-start",
    alignItems: "flex-end",
  })
);

export const ChatMessage = styled.div<ChatStyleProps>(({ theme, isMine }) => ({
  borderRadius: 5,
  backgroundColor: isMine ? "#ffe400" : theme.colors.white,
  padding: theme.spacing.xSmall,
  paddingLeft: theme.spacing.small,
  paddingRight: theme.spacing.small,
  maxWidth: theme.config.width / 1.5,
}));

export const ChatTime = styled.div<ChatStyleProps>(({ theme, isMine }) => ({
  paddingRight: isMine ? theme.spacing.small : 0,
  paddingLeft: !isMine ? theme.spacing.small : 0,
}));

export const ChatFriendImage = styled.img<ThemeProps>(({ theme }) => ({
  width: IMAGE_SIZE,
  height: IMAGE_SIZE,
  objectFit: "cover",
  borderRadius: 15,
}));
