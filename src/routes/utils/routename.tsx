import AddFriendContainer from "modules/addFriend/AddFriendContainer";
import FindPasswordContainer from "modules/auth/FindPassword/FindPasswordContainer";
import SignInContainer from "modules/auth/SignIn/SignInContainer";
import SignUpInputContainer from "modules/auth/SignUp/signUp/SignUpInputContainer";
import SignUpTermsContainer from "modules/auth/SignUp/terms/SignUpTermsContainer";
import HomeContainer from "modules/home/HomeContainer";
import ProfileCardContainer from "modules/profileCard/ProfileCardContainer";
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
    element: <ProfileCardContainer />,
  },
  ADD_FRIEND: {
    path: "/add_friend",
    element: <AddFriendContainer />,
  },
  SETTING: {
    path: "/setting",
    element: <SettingContainer />,
  },
};
