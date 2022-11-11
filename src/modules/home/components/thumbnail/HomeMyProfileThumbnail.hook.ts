import { useNavigate } from "react-router-dom";
import { PRIVATE_ROUTES } from "routes/utils/routename";

function useHomeMyProfileThumbnail() {
  const navigate = useNavigate();

  function onProfileCardPress() {
    navigate(PRIVATE_ROUTES.PROFILE_CARD.path);
  }

  return {
    operations: {
      onProfileCardPress,
    },
  };
}

export default useHomeMyProfileThumbnail;
