import InnerContainerHeader from "../common/components/InnerContainerHeader";
import { HomeInnerContainerProps } from "../common/interfaces/homeInterface";
import { InnerContaienrWrapper } from "../common/styles/homeStyles";
import FriendContainerBody from "./components/FriendContainerBody";

function FriendContainer({ tabIndex }: HomeInnerContainerProps) {
  return (
    <InnerContaienrWrapper>
      <InnerContainerHeader title="친구" tabIndex={tabIndex} />
      <FriendContainerBody />
    </InnerContaienrWrapper>
  );
}

export default FriendContainer;
