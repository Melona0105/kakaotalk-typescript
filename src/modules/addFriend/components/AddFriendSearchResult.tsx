import Button from "modules/common/components/Button";
import { UserType } from "modules/common/providers/AuthProvider";
import { useTheme } from "styled-components";
import {
  AddFriendSearchResultImage,
  AddFriendSearchResultText,
  AddFriendSearchResultWrapper,
} from "./AddFriendSearchResult.style";

interface AddFriendSearchResultProps {
  data?: UserType;
}

function AddFriendSearchResult({ data }: AddFriendSearchResultProps) {
  const theme = useTheme();

  if (!data?.id) {
    return (
      <AddFriendSearchResultText>
        일치하는 친구가 없어요
      </AddFriendSearchResultText>
    );
  }

  const { id, username, avatarURL } = data;

  return (
    <AddFriendSearchResultWrapper>
      <AddFriendSearchResultImage src={avatarURL} />
      <AddFriendSearchResultText>{username}</AddFriendSearchResultText>

      <Button
        title="친구 추가"
        backgroundColor={theme.colors.kakaoYellow}
        color={theme.colors.black}
        fontSize={theme.fontSize.small}
        width={60}
        marginTop={theme.spacing.middle}
        padding={theme.spacing.small}
        onClick={() => console.log(id)}
      />
    </AddFriendSearchResultWrapper>
  );
}

export default AddFriendSearchResult;
