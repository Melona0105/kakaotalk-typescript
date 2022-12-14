import useManageSearch from "app//common/hooks/useManageSearch";
import InnerContainerHeader from "app/common/components/InnerContainerHeader";
import HomeFriensSectionBody from "./HomeFriensSectionBody";
import { InnerContaienrWrapper } from "../common/styles/homeStyles";

function HomeFriensSection() {
  const { models, operations } = useManageSearch();
  const { searchKeyword } = models;
  const { onSearchKeywordChange, onClearSearchKewordClick } = operations;

  return (
    <InnerContaienrWrapper>
      <InnerContainerHeader
        title="친구"
        searchKeyword={searchKeyword}
        onSearchKeywordChange={onSearchKeywordChange}
        onClearSearchKewordClick={onClearSearchKewordClick}
      />
      <HomeFriensSectionBody searchKeyword={searchKeyword} />
    </InnerContaienrWrapper>
  );
}

export default HomeFriensSection;
