import { MainContainerWrapper } from "modules/common/styles/commonStyles";
import NavigationBar from "navigation/NavigationBar";
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
