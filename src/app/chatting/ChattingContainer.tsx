import NavigationBar from "app//navigation/NavigationBar";
import { MainContainerWrapper } from "app/common/styles/commonStyles";
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
