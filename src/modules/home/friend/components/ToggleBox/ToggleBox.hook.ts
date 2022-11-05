import { useState } from "react";

function useToggleBox(initialState: boolean) {
  const [showChildren, setShowChildren] = useState<boolean>(initialState);

  function toggleShowChildren() {
    setShowChildren(!showChildren);
  }

  return {
    models: {
      showChildren,
    },
    operations: {
      toggleShowChildren,
    },
  };
}

export default useToggleBox;
