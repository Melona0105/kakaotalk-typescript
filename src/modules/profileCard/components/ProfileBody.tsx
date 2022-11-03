import profileDefault from "assets/images/profile_default.png";
import { FlexDiv } from "modules/common/styles/commonStyles";
import {
  ProfileBodyEditDiv,
  ProfileBodyEditIcon,
  ProfileBodyImage,
  ProfileBodyWrapper,
} from "./ProfileBody.style";

interface ProfileBodyProps {
  isEditMode: boolean;
}

function ProfileBody({ isEditMode }: ProfileBodyProps) {
  const SAMPLE_ITEMS = ["박덕원", "상태메시지를 입력해 주세요."];

  return (
    <ProfileBodyWrapper>
      <ProfileBodyImage
        source={profileDefault}
        isEditMode={isEditMode}
        onClick={() => isEditMode && console.log("사진편집")}
      >
        {isEditMode && <div>편집</div>}
      </ProfileBodyImage>
      {isEditMode ? (
        SAMPLE_ITEMS.map((item) => (
          <ProfileBodyEditDiv key={item}>
            <div>{item}</div>
            <ProfileBodyEditIcon />
          </ProfileBodyEditDiv>
        ))
      ) : (
        <div>박덕원</div>
      )}
    </ProfileBodyWrapper>
  );
}

export default ProfileBody;
