import CloseButtonHeader from "app/common/components/CloseButtonHeader";
import useEscapeShortcut from "app/common/hooks/useEscapeShortcut";
import { CloseModalContainerWrapper } from "app/common/styles/commonStyles";
import AddFriendBody from "./components/AddFriendBody";

function AddFriendContainer() {
  useEscapeShortcut();

  return (
    <CloseModalContainerWrapper>
      <CloseButtonHeader title="친구추가" />
      <AddFriendBody />
    </CloseModalContainerWrapper>
  );
}

export default AddFriendContainer;
