import AddFriendContainer from "app/modules/addFriend/AddFriendContainer";
import ResetPasswordContainer from "app/modules/auth/resetPassword/ResetPasswordContainer";
import SignInContainer from "app/modules/auth/signIn/SignInContainer";
import SignUpInputContainer from "app/modules/auth/signUp/signUp/SignUpInputContainer";
import SignUpTermsContainer from "app/modules/auth/signUp/terms/SignUpTermsContainer";
import ChattingContainer from "app/modules/chatting/ChattingContainer";
import ChattingRoomContainer from "app/modules/chattingRoom/ChattingRoomContainer";
import CreateChattingContainer from "app/modules/createChatting/CreateChattingContainer";
import HomeContainer from "app/modules/home/HomeContainer";
import FriendsProfileCardContainer from "app/modules/profileCard/friendProfileCard/FriendsProfileCardContainer";
import MyProfileCardContainer from "app/modules/profileCard/myProfileCard/MyProfileCardContainer";
import ManagementFriendContainer from "app/modules/setting/managementFriend/ManagementFriendContainer";
import SettingContainer from "app/modules/setting/SettingContainer";
import ViewMoreContainer from "app/modules/viewMore/ViewMoreContainer";
import React from "react";
import { Outlet } from "react-router-dom";

interface RoutesType {
  [key: string]: {
    path: string;
    element: React.ReactNode;
    children?: { path: string; element: React.ReactNode }[];
  };
}

export const PUBLIC_ROUTES: RoutesType = {
  SIGN_IN: {
    path: "/",
    element: <SignInContainer />,
  },
  SIGN_UP: {
    path: "/sign_up",
    element: <Outlet />,
    children: [
      { path: "", element: <SignUpTermsContainer /> },
      { path: "input", element: <SignUpInputContainer /> },
    ],
  },
  FIND_PASSWORD: {
    path: "/find_password",
    element: <ResetPasswordContainer />,
  },
};

export const PRIVATE_ROUTES: RoutesType = {
  HOME: {
    path: "/",
    element: <HomeContainer />,
  },
  CHATTING: {
    path: "/chatting",
    element: <ChattingContainer />,
  },
  VIEW_MORE: {
    path: "/view_more",
    element: <ViewMoreContainer />,
  },
  PROFILE_CARD: {
    path: "/profile",
    element: <Outlet />,
    children: [
      {
        path: "",
        element: <MyProfileCardContainer />,
      },
      {
        path: ":friendId",
        element: <FriendsProfileCardContainer />,
      },
    ],
  },
  ADD_FRIEND: {
    path: "/add_friend",
    element: <AddFriendContainer />,
  },
  CREATE_NEW_CHATTING: {
    path: "/new_chatting",
    element: <CreateChattingContainer />,
  },

  SETTING: {
    path: "/setting",
    element: <Outlet />,
    children: [
      { path: "", element: <SettingContainer /> },
      {
        path: "management_hidden_friend",
        element: <ManagementFriendContainer />,
      },
      {
        path: "management_blocked_friend",
        element: <ManagementFriendContainer />,
      },
    ],
  },
  CHATTING_ROOM: {
    path: "/chatting_room",
    element: <Outlet />,
    children: [
      {
        path: ":roomId",
        element: <ChattingRoomContainer />,
      },
    ],
  },
};
