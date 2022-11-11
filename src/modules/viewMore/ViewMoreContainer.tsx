import { MainContainerWrapper } from "modules/common/styles/commonStyles";
import NavigationBar from "navigation/NavigationBar";
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
