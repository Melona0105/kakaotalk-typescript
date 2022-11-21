import useManageSearch from "app//common/hooks/useManageSearch";
import { InnerContaienrWrapper } from "app//home/common/styles/homeStyles";
import InnerContainerHeader from "app/common/components/InnerContainerHeader";
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
