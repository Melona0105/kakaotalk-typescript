import AddFriendContainer from "modules/addFriend/AddFriendContainer";
import FindPasswordContainer from "modules/auth/FindPassword/FindPasswordContainer";
import SignInContainer from "modules/auth/SignIn/SignInContainer";
import SignUpInputContainer from "modules/auth/SignUp/signUp/SignUpInputContainer";
import SignUpTermsContainer from "modules/auth/SignUp/terms/SignUpTermsContainer";
import ChattingRoomContainer from "modules/chattingRoom/ChattingRoomContainer";
import HomeContainer from "modules/home/HomeContainer";
import FriendsProfileCardContainer from "modules/profileCard/friendProfileCard/FriendsProfileCardContainer";
import MyProfileCardContainer from "modules/profileCard/myProfileCard/MyProfileCardContainer";
import ManagementFriendContainer from "modules/setting/managementFriend/ManagementFriendContainer";
import SettingContainer from "modules/setting/SettingContainer";
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
    element: <FindPasswordContainer />,
  },
};

export const PRIVATE_ROUTES: RoutesType = {
  HOME: {
    path: "/",
    element: <HomeContainer />,
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
