import { Route, Routes } from "react-router-dom";
import { firebaseSignOut } from "../libs/firebase/firebaseAuth";
import { useAuthContext } from "../modules/common/providers/AuthProvider";
import Layout from "./components/Layout";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "./utils/routename";

function RouteContainer() {
  const { userProfile } = useAuthContext();
  const ROUTES = userProfile ? PRIVATE_ROUTES : PUBLIC_ROUTES;

  // firebaseSignOut();
  return (
    <Routes>
      {Object.keys(ROUTES).map((routeKey) => {
        const { path, element, children } = ROUTES[routeKey];
        return (
          <Route
            key={routeKey}
            path={path}
            element={<Layout>{element}</Layout>}
          >
            {children?.map((child) => (
              <Route
                key={child.path}
                path={child.path}
                element={child.element}
              />
            ))}
          </Route>
        );
      })}
    </Routes>
  );
}

export default RouteContainer;
