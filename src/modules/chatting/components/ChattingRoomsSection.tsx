import useManageSearch from "modules/common/hooks/useManageSearch";
import InnerContainerHeader from "modules/home/common/components/InnerContainerHeader";
import { InnerContaienrWrapper } from "modules/home/common/styles/homeStyles";
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
      <ChattingRoomsSectionBody />
    </InnerContaienrWrapper>
  );
}

export default ChattingRoomsSection;
