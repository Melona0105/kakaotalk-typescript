import { useMemo } from "react";
import useAddFriendBody from "./AddFriendBody.hook";
import {
  AddFriendBodyTextDiv,
  AddFriendBodyInput,
  AddFriendBodyWrapper,
  AddFriendBodyMyInfoWrapper,
  AddFriendBodyMyInfoDiv,
  AddFriendBodyInputClearIcon,
} from "./AddFriendBody.style";

function AddFriendBody() {
  const { models, operations } = useAddFriendBody();
  const { keyword } = models;
  const { onKeywordChange, onClearInputClick } = operations;

  const MemorizedInput = useMemo(
    () => (
      <AddFriendBodyTextDiv>
        <AddFriendBodyInput
          placeholder="친구 이메일"
          value={keyword}
          onChange={onKeywordChange}
          maxLength={20}
        />
        {!!keyword.length && (
          <AddFriendBodyInputClearIcon onClick={onClearInputClick} />
        )}
        <div>{keyword.length}/20</div>
      </AddFriendBodyTextDiv>
    ),
    [keyword]
  );

  const MemorizedInfo = useMemo(
    () => (
      <AddFriendBodyMyInfoWrapper>
        <AddFriendBodyMyInfoDiv>
          <div>내 아이디</div>
          <div>duduki</div>
        </AddFriendBodyMyInfoDiv>
      </AddFriendBodyMyInfoWrapper>
    ),
    []
  );

  return (
    <AddFriendBodyWrapper>
      {MemorizedInput}
      {MemorizedInfo}
    </AddFriendBodyWrapper>
  );
}

export default AddFriendBody;
