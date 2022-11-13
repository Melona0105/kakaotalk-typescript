import InnerContainerHeader from "app/modules/common/components/InnerContainerHeader";
import useManageSearch from "app/modules/common/hooks/useManageSearch";
import { InnerContaienrWrapper } from "app/modules/home/common/styles/homeStyles";
import ChattingRoomsSectionBody from "./ChattingRoomsSectionBody";

function ChattingRoomsSection() {
  const { models, operations } = useManageSearch();
  const { searchKeyword } = models;
  const { onSearchKeywordChange, onClearSearchKewordClick } = operations;

  return (
    <InnerContaienrWrapper>
      <InnerContainerHeader
        title="채팅"
        searchKeyword={searchKeyword}
        onSearchKeywordChange={onSearchKeywordChange}
        onClearSearchKewordClick={onClearSearchKewordClick}
      />
      <ChattingRoomsSectionBody searchKeyword={searchKeyword} />
    </InnerContaienrWrapper>
  );
}

export default ChattingRoomsSection;
