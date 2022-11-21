import { useProfileContext } from "app//common/providers/ProfileProvider";
import Button from "app/common/components/Button";
import defaultImage from "assets/images/friend_default_image.png";
import { Friend } from "domain/entities/friendEntity";
import { useTheme } from "styled-components";
import useAddFriendSearchResult from "./AddFriendSearchResult.hook";
import {
  AddFriendSearchResultImage,
  AddFriendSearchResultText,
  AddFriendSearchResultWrapper,
} from "./AddFriendSearchResult.style";

interface AddFriendSearchResultProps {
  data?: Friend;
}

function AddFriendSearchResult({ data }: AddFriendSearchResultProps) {
  const theme = useTheme();
  const { userProfile } = useProfileContext();
  const { operations } = useAddFriendSearchResult();
  const { onAddFriendClick } = operations;

  if (!data?.id) {
    return (
      <AddFriendSearchResultText>
        일치하는 친구가 없어요
      </AddFriendSearchResultText>
    );
  }

  const { id, username, avatarURL, isFriend } = data;

  const isMine = data.id === userProfile?.id;

  return (
    <AddFriendSearchResultWrapper>
      <AddFriendSearchResultImage src={avatarURL || defaultImage} />
      <AddFriendSearchResultText>{username}</AddFriendSearchResultText>

      <Button
        disabled={isMine || isFriend}
        title={
          isMine ? "자신입니다." : isFriend ? "이미 친구입니다." : "친구 추가"
        }
        backgroundColor={theme.colors.kakaoYellow}
        color={theme.colors.black}
        fontSize={theme.fontSize.small}
        marginTop={theme.spacing.middle}
        padding={theme.spacing.small}
        onClick={() => !(isMine || isFriend) && onAddFriendClick(id)}
      />
    </AddFriendSearchResultWrapper>
  );
}

export default AddFriendSearchResult;
