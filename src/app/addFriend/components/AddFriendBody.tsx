import Loading from "app/common/components/Loading";
import { useMemo } from "react";
import useAddFriendBody from "./AddFriendBody.hook";
import AddFriendSearchResult from "./AddFriendSearchResult";
import {
  AddFriendBodyTextDiv,
  AddFriendBodyInput,
  AddFriendBodyWrapper,
  AddFriendBodyMyInfoDiv,
  AddFriendBodyInputClearIcon,
} from "./AddFriendBody.style";

const EMAIL_MAX_LENGTH = 30;

function AddFriendBody() {
  const { models, operations } = useAddFriendBody();
  const { data, isLoading, keyword, showResult } = models;
  const { onKeywordChange, onClearInputClick, onKeyDown } = operations;

  const MemorizedInput = useMemo(
    () => (
      <AddFriendBodyTextDiv>
        <AddFriendBodyInput
          placeholder="친구 이메일"
          value={keyword}
          onKeyDown={onKeyDown}
          onChange={onKeywordChange}
          maxLength={EMAIL_MAX_LENGTH}
        />
        {!!keyword.length && !showResult && (
          <AddFriendBodyInputClearIcon onClick={onClearInputClick} />
        )}
        <div>
          {keyword.length}/{EMAIL_MAX_LENGTH}
        </div>
      </AddFriendBodyTextDiv>
    ),
    [keyword, showResult, onKeyDown, onKeywordChange, onClearInputClick]
  );

  const MemorizedInfo = useMemo(
    () => (
      <AddFriendBodyMyInfoDiv>
        <div>내 아이디</div>
        <div>duduki</div>
      </AddFriendBodyMyInfoDiv>
    ),
    []
  );

  return (
    <AddFriendBodyWrapper>
      {MemorizedInput}
      {isLoading && <Loading />}

      {!isLoading && showResult ? (
        <AddFriendSearchResult data={data} />
      ) : (
        MemorizedInfo
      )}
    </AddFriendBodyWrapper>
  );
}

export default AddFriendBody;
