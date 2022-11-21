import { PRIVATE_ROUTES } from "app/routes/utils/routename";
import { useNavigate } from "react-router-dom";

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
