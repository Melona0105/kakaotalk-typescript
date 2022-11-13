import { MainContainerWrapper } from "app/modules/common/styles/commonStyles";
import NavigationBar from "app/navigation/NavigationBar";
import HomeFriensSection from "./components/HomeFriensSection";

/**
 * 홈 컴포넌트들을 렌더링하는 컨테이너입니다.
 */
function HomeContainer() {
  return (
    <MainContainerWrapper>
      <NavigationBar />
      <HomeFriensSection />
    </MainContainerWrapper>
  );
}

export default HomeContainer;
