import ModalHeader from "modules/common/components/ModalHeader";
import { AddFriendContainerWrapper } from "./AddFriendContainer.style";
import AddFriendBody from "./components/AddFriendBody";

function AddFriendContainer() {
  return (
    <AddFriendContainerWrapper>
      <ModalHeader title="이메일 검색으로 추가" />
      <AddFriendBody />
    </AddFriendContainerWrapper>
  );
}

export default AddFriendContainer;
