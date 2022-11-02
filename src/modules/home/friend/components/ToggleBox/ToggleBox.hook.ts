import { useState } from "react";

function useToggleBox() {
  const [showChildren, setShowChildren] = useState<boolean>(false);

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
