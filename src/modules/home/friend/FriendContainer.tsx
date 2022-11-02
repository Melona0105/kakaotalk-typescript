import InnerContainerHeader from "../common/components/InnerContainerHeader";
import { HomeInnerContainerProps } from "../common/interfaces/homeInterface";
import { InnerContaienrWrapper } from "../common/styles/homeStyles";

function FriendContainer({ tabIndex }: HomeInnerContainerProps) {
  return (
    <InnerContaienrWrapper>
      <InnerContainerHeader title="친구" tabIndex={tabIndex} />
    </InnerContaienrWrapper>
  );
}

export default FriendContainer;
