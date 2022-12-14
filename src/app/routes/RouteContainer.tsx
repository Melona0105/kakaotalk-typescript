import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import useRouteContainer from "./RouteContainer.hook";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "./utils/routename";
import { useProfileContext } from "../common/providers/ProfileProvider";

/**
 * 앱 내에 존재하는 Route들을 렌더링하는 컴포넌트입니다.
 */
function RouteContainer() {
  const { userProfile } = useProfileContext();
  const ROUTES = userProfile ? PRIVATE_ROUTES : PUBLIC_ROUTES;
  useRouteContainer();

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
