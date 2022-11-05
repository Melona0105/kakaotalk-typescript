import defaultImage from "assets/images/friend_default_image.png";
import Button from "modules/common/components/Button";
import { useTheme } from "styled-components";
import { FriendType } from "utils/interfaces/apiInterface";
import useAddFriendSearchResult from "./AddFriendSearchResult.hook";
import {
  AddFriendSearchResultImage,
  AddFriendSearchResultText,
  AddFriendSearchResultWrapper,
} from "./AddFriendSearchResult.style";

interface AddFriendSearchResultProps {
  data?: FriendType;
}

function AddFriendSearchResult({ data }: AddFriendSearchResultProps) {
  const theme = useTheme();
  const { models, operations } = useAddFriendSearchResult();
  const { isAdded } = models;
  const { onAddFriendClick } = operations;

  if (!data?.id) {
    return (
      <AddFriendSearchResultText>
        일치하는 친구가 없어요
      </AddFriendSearchResultText>
    );
  }

  const { id, username, avatarURL, isFriend } = data;

  return (
    <AddFriendSearchResultWrapper>
      <AddFriendSearchResultImage src={avatarURL || defaultImage} />
      <AddFriendSearchResultText>{username}</AddFriendSearchResultText>

      <Button
        disabled={isFriend || isAdded}
        title={isFriend || isAdded ? "이미 친구입니다." : "친구 추가"}
        backgroundColor={theme.colors.kakaoYellow}
        color={theme.colors.black}
        fontSize={theme.fontSize.small}
        marginTop={theme.spacing.middle}
        padding={theme.spacing.small}
        onClick={() => onAddFriendClick(id)}
      />
    </AddFriendSearchResultWrapper>
  );
}

export default AddFriendSearchResult;
