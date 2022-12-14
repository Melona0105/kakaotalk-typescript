import CloseButtonHeader from "app/common/components/CloseButtonHeader";
import { CloseButtonStyleWrapper } from "app/common/styles/commonStyles";
import ManagementFriends from "./components/ManagementFriends";
import useManagementFriendContainer from "./ManagementFriendContainer.hook";

function ManagementFriendContainer() {
  const { models } = useManagementFriendContainer();
  const { isHiddenFreindPath, data } = models;

  return (
    <CloseButtonStyleWrapper
      style={{ display: "flex", flexDirection: "column" }}
    >
      <CloseButtonHeader
        title={isHiddenFreindPath ? "숨김친구 관리" : "차단친구 관리"}
      />
      <ManagementFriends friends={data} />
    </CloseButtonStyleWrapper>
  );
}

export default ManagementFriendContainer;
