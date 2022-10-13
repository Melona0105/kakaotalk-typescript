import React from "react";
import SignInContainer from "../../Auth/SignIn/SignInContainer";

interface IRoutesValue {
  [key: string]: {
    path: string;
    element: JSX.Element;
  };
}

export const PUBLIC_ROUTES: IRoutesValue = {
  AUTH: {
    path: "/",
    element: <SignInContainer />,
  },
};
