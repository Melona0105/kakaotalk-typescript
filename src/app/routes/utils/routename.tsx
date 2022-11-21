import AddFriendContainer from "app/addFriend/AddFriendContainer";
import ResetPasswordContainer from "app/auth/resetPassword/ResetPasswordContainer";
import SignInContainer from "app/auth/signIn/SignInContainer";
import SignUpInputContainer from "app/auth/signUp/signUp/SignUpInputContainer";
import SignUpTermsContainer from "app/auth/signUp/terms/SignUpTermsContainer";
import ChattingContainer from "app/chatting/ChattingContainer";
import ChattingRoomContainer from "app/chattingRoom/ChattingRoomContainer";
import CreateChattingContainer from "app/createChatting/CreateChattingContainer";
import HomeContainer from "app/home/HomeContainer";
import FriendsProfileCardContainer from "app/profileCard/friendProfileCard/FriendsProfileCardContainer";
import MyProfileCardContainer from "app/profileCard/myProfileCard/MyProfileCardContainer";
import ManagementFriendContainer from "app/setting/managementFriend/ManagementFriendContainer";
import SettingContainer from "app/setting/SettingContainer";
import ViewMoreContainer from "app/viewMore/ViewMoreContainer";
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
