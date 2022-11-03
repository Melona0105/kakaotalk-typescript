import profileDefault from "assets/images/profile_default.png";
import { ChangeEvent } from "react";
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
  avatarURL?: string;
  avatarState?: File | null;
  onTextCange: (
    payload: Pick<ProfileCardStateType, "username" | "summary">
  ) => void;
  onAvatarChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function ProfileBody({
  isEditMode,
  username,
  summary,
  avatarURL,
  avatarState,
  onTextCange,
  onAvatarChange,
}: ProfileBodyProps) {
  const { refs, models, operations } = useProfileBody(
    onTextCange,
    username,
    summary
  );
  const { imageInputRef } = refs;
  const { PROFILE_ITEMS } = models;
  const { onImageInputClick } = operations;

  return (
    <ProfileBodyWrapper>
      <ProfileBodyImage
        source={
          avatarState
            ? URL.createObjectURL(avatarState)
            : avatarURL || profileDefault
        }
        isEditMode={isEditMode}
        onClick={() => isEditMode && onImageInputClick()}
      >
        {isEditMode && <div>편집</div>}
        <input
          ref={imageInputRef}
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={onAvatarChange}
        />
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
