import React from "react";
import { Outlet } from "react-router-dom";
import FindPasswordContainer from "../../modules/Auth/FindPassword/FindPasswordContainer";
import SignInContainer from "../../modules/Auth/SignIn/SignInContainer";
import SignUpInputContainer from "../../modules/Auth/SignUp/signUp/SignUpInputContainer";
import SignUpTermsContainer from "../../modules/Auth/SignUp/terms/SignUpTermsContainer";
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
};
