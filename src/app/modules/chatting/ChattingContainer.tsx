import { MainContainerWrapper } from "app/modules/common/styles/commonStyles";
import NavigationBar from "app/navigation/NavigationBar";
import ChattingRoomsSection from "./components/ChattingRoomsSection";

function ChattingContainer() {
  return (
    <MainContainerWrapper>
      <NavigationBar />
      <ChattingRoomsSection />
    </MainContainerWrapper>
  );
}

export default ChattingContainer;
