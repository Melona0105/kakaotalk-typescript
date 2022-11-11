import CloseButtonHeader from "modules/common/components/CloseButtonHeader";
import useGobackWhenESCPress from "modules/common/hooks/useGobackWhenESCPress";
import { AddFriendContainerWrapper } from "./AddFriendContainer.style";
import AddFriendBody from "./components/AddFriendBody";

function AddFriendContainer() {
  useGobackWhenESCPress();

  return (
    <AddFriendContainerWrapper>
      <CloseButtonHeader title="이메일 검색으로 추가" />
      <AddFriendBody />
    </AddFriendContainerWrapper>
  );
}

export default AddFriendContainer;
