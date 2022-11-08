import FriendContainerBody from "./components/FriendContainerBody";
import useFriendContainer from "./FriendContainer.hook";
import InnerContainerHeader from "../common/components/InnerContainerHeader";
import { HomeInnerContainerProps } from "../common/interfaces/homeInterface";
import { InnerContaienrWrapper } from "../common/styles/homeStyles";

function FriendContainer({ tabIndex }: HomeInnerContainerProps) {
  const { models, operations } = useFriendContainer();
  const { searchKeyword } = models;
  const { onSearchKeywordChange, onClearSearchKewordClick } = operations;

  return (
    <InnerContaienrWrapper>
      <InnerContainerHeader
        title="친구"
        tabIndex={tabIndex}
        searchKeyword={searchKeyword}
        onSearchKeywordChange={onSearchKeywordChange}
        onClearSearchKewordClick={onClearSearchKewordClick}
      />
      <FriendContainerBody searchKeyword={searchKeyword} />
    </InnerContaienrWrapper>
  );
}

export default FriendContainer;
