import { useState } from "react";

function useProfileCardContainer() {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  function handleIsEditMode() {
    setIsEditMode(!isEditMode);
  }

  function saveEditMode() {
    setIsEditMode(!isEditMode);
  }

  return {
    models: {
      isEditMode,
    },
    operations: {
      handleIsEditMode,
      saveEditMode,
    },
  };
}

export default useProfileCardContainer;
