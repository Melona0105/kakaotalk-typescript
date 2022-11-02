import { useState } from "react";

function useHomeContainer() {
  // 현재 홈화면의 인덱스를 관리합니다.
  const [tabIndex, setTabIndex] = useState<number>(0);

  /**
   * navigation bar의 이미지를 클릭하면, 해당 인덱스로 홈화면의 인덱스를 변경하는 함수입니다.
   */
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
