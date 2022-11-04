import ModalHeader from "modules/common/components/ModalHeader";
import { AddFriendContainerWrapper } from "./AddFriendContainer.style";
import AddFriendBody from "./components/AddFriendBody";

function AddFriendContainer() {
  return (
    <AddFriendContainerWrapper>
      <ModalHeader title="카카오톡 ID로 추가" />
      <AddFriendBody />
    </AddFriendContainerWrapper>
  );
}

export default AddFriendContainer;
