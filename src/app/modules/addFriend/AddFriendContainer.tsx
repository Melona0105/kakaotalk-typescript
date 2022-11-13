import CloseButtonHeader from "app/modules/common/components/CloseButtonHeader";
import useEscapeShortcut from "app/modules/common/hooks/useEscapeShortcut";
import { CloseModalContainerWrapper } from "app/modules/common/styles/commonStyles";
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
