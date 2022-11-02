import { HOME_INNER_CONTAINER } from "./common/utils/homeConstants";
import NavigationBar from "./components/NavigationBar";
import useHomeContainer from "./HomeContainer.hook";
import { HomeContainerWrapper } from "./HomeContainer.style";

/**
 * 홈 컴포넌트들을 렌더링하는 컨테이너입니다.
 */
function HomeContainer() {
  const { models, operations } = useHomeContainer();
  const { tabIndex } = models;
  const { onTabPress } = operations;

  return (
    <HomeContainerWrapper>
      <NavigationBar tabIndex={tabIndex} onTabPress={onTabPress} />
      {HOME_INNER_CONTAINER[tabIndex]}
    </HomeContainerWrapper>
  );
}

export default HomeContainer;
