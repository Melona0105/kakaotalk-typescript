import React from "react";
import FindPasswordContainer from "../../Auth/FindPassword/FindPasswordContainer";
import SignInContainer from "../../Auth/SignIn/SignInContainer";
import SignUpContainer from "../../Auth/SIgnUp/SIgnUpContainer";

interface RoutesType {
  [key: string]: {
    path: string;
    element: React.ReactNode;
  };
}

export const PUBLIC_ROUTES: RoutesType = {
  SIGN_IN: {
    path: "/",
    element: <SignInContainer />,
  },
  SIGN_UP: {
    path: "/sign_up",
    element: <SignUpContainer />,
  },
  FIND_PASSWORD: {
    path: "/find_password",
    element: <FindPasswordContainer />,
  },
};
