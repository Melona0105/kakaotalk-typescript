import { useState } from "react";

function useHomeContainer() {
  const [tabIndex, setTabIndex] = useState<number>(0);

  function onTabPress(index: number) {
    setTabIndex(index);
  }

  return {
    models: {
      tabIndex,
    },
    operations: {
      onTabPress,
    },
  };
}

export default useHomeContainer;
