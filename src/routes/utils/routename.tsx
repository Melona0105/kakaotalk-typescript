import React from "react";
import { Outlet } from "react-router-dom";
import FindPasswordContainer from "../../modules/auth/findPassword/FindPasswordContainer";
import SignInContainer from "../../modules/auth/signIn/SignInContainer";
import SignUpInputContainer from "../../modules/auth/signUp/signUp/SignUpInputContainer";
import SignUpTermsContainer from "../../modules/auth/signUp/terms/SignUpTermsContainer";
import HomeContainer from "../../modules/home/HomeContainer";

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
      { path: "agreement", element: <SignUpInputContainer /> },
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
};
