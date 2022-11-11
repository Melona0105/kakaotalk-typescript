import InnerContainerHeader from "modules/common/components/InnerContainerHeader";
import useManageSearch from "modules/common/hooks/useManageSearch";
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
      <ChattingRoomsSectionBody searchKeyword={searchKeyword} />
    </InnerContaienrWrapper>
  );
}

export default ChattingRoomsSection;
