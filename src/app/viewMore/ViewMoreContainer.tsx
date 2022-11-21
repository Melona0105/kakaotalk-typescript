import { MainContainerWrapper } from "app/common/styles/commonStyles";
import NavigationBar from "app/navigation/NavigationBar";
import ViewMoreSection from "./components/ViewMoreSection";

function ViewMoreContainer() {
  return (
    <MainContainerWrapper>
      <NavigationBar />
      <ViewMoreSection />
    </MainContainerWrapper>
  );
}

export default ViewMoreContainer;
