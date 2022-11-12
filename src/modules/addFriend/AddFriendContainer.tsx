import CloseButtonHeader from "modules/common/components/CloseButtonHeader";
import useEscapeShortcut from "modules/common/hooks/useEscapeShortcut";
import { AddFriendContainerWrapper } from "./AddFriendContainer.style";
import AddFriendBody from "./components/AddFriendBody";

function AddFriendContainer() {
  useEscapeShortcut();

  return (
    <AddFriendContainerWrapper>
      <CloseButtonHeader title="친구추가" />
      <AddFriendBody />
    </AddFriendContainerWrapper>
  );
}

export default AddFriendContainer;
