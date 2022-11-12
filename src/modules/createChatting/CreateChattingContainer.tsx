import CloseButtonHeader from "modules/common/components/CloseButtonHeader";
import SearchInput from "modules/common/components/SearchInput";
import useManageSearch from "modules/common/hooks/useManageSearch";
import { CloseModalContainerWrapper } from "modules/common/styles/commonStyles";
import { useMemo } from "react";
import CreateChattingFriends from "./components/CreateChattingFriends";
import useCreateChattingContainer from "./CreateChattingContainer.hook";

/**
 * 채팅목록에서 새로운 채팅을 생성하는 컨테이너입니다.
 */
function CreateChattingContainer() {
  const { models, operations } = useCreateChattingContainer();
  const { selectedFriendId } = models;
  const { onFriendSelect, onCreateChattingRoomClick } = operations;
  const manageSearch = useManageSearch();

  const MemorizedHeader = useMemo(
    () => (
      <CloseButtonHeader
        title="대화상태 선택"
        rightButtonDisabled={!selectedFriendId}
        showPaddingBottom
        onRightButtonClick={onCreateChattingRoomClick}
      />
    ),
    [selectedFriendId, onCreateChattingRoomClick]
  );

  const MemorizedSearchInput = useMemo(
    () => <SearchInput {...manageSearch.models} {...manageSearch.operations} />,
    [manageSearch]
  );

  const MemorizedFriends = useMemo(
    () => (
      <CreateChattingFriends
        selectedFriendId={selectedFriendId}
        searchKeyword={manageSearch.models.searchKeyword}
        onFriendSelect={onFriendSelect}
      />
    ),
    [selectedFriendId, onFriendSelect]
  );

  return (
    <CloseModalContainerWrapper>
      {MemorizedHeader}
      {MemorizedSearchInput}
      {MemorizedFriends}
    </CloseModalContainerWrapper>
  );
}

export default CreateChattingContainer;
