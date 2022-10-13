import { Route, Routes } from "react-router-dom";
import { PUBLIC_ROUTES } from "./utils/routename";

function RouteContainer() {
  return (
    <Routes>
      {Object.keys(PUBLIC_ROUTES).map((routeKey) => {
        const { path, element } = PUBLIC_ROUTES[routeKey];
        return <Route key={routeKey} path={path} element={element} />;
      })}
    </Routes>
  );
}

export default RouteContainer;
