import NavigationBar from "./components/NavigationBar";
import useHomeContainer from "./HomeContainer.hook";

function HomeContainer() {
  const { models, operations } = useHomeContainer();
  const { tabIndex } = models;
  const { onTabPress } = operations;

  return (
    <div style={{ display: "flex", flex: 1 }}>
      <NavigationBar tabIndex={tabIndex} onTabPress={onTabPress} />
    </div>
  );
}

export default HomeContainer;
