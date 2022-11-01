import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { PUBLIC_ROUTES } from "./utils/routename";

function RouteContainer() {
  return (
    <Routes>
      {Object.keys(PUBLIC_ROUTES).map((routeKey) => {
        const { path, element, children } = PUBLIC_ROUTES[routeKey];
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
