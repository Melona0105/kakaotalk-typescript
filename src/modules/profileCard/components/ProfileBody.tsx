import profileDefault from "assets/images/profile_default.png";
import useProfileBody from "./ProfileBody.hook";
import { ProfileCardStateType } from "../ProfileCardContainer.interface";
import {
  ProfileBodyEditDiv,
  ProfileBodyEditIcon,
  ProfileBodyImage,
  ProfileBodySummary,
  ProfileBodyTextInput,
  ProfileBodyUsername,
  ProfileBodyWrapper,
} from "./ProfileBody.style";

interface ProfileBodyProps {
  isEditMode: boolean;
  username?: string;
  summary?: string;
  onTextCange: (
    payload: Pick<ProfileCardStateType, "username" | "summary">
  ) => void;
}

function ProfileBody({
  isEditMode,
  username,
  summary,
  onTextCange,
}: ProfileBodyProps) {
  const { models } = useProfileBody(onTextCange, username, summary);
  const { PROFILE_ITEMS } = models;

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
        PROFILE_ITEMS.map(({ id, value, placeholder, onChange }) => (
          <ProfileBodyEditDiv key={id}>
            <ProfileBodyTextInput
              value={value}
              placeholder={placeholder}
              onChange={({ target }) => onChange(target.value)}
            />
            <ProfileBodyEditIcon />
          </ProfileBodyEditDiv>
        ))
      ) : (
        <div>
          <ProfileBodyUsername showPaddingBottom={!!summary}>
            {username}
          </ProfileBodyUsername>
          {summary && <ProfileBodySummary>{summary}</ProfileBodySummary>}
        </div>
      )}
    </ProfileBodyWrapper>
  );
}

export default ProfileBody;
