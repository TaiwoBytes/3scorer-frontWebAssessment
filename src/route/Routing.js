import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './RoutePaths';

// const PrivateRoute = ({ element }) => {
//   // Replace this with your authentication logic
//   const isAuthenticated = true; // Replace with your authentication check

//   if (isAuthenticated) {
//     return <Outlet />;
//   }

//   return <Navigate to="/" replace />;
// };

const renderRoutes = (routes) => {
  return routes.map((route, index) => {
    const RouteComponent = route.children ? Routes : Route;
    const routeProps = {
      path: route.path,
      key: index,
      element: route.children ? (
        <Children routes={route.children} />
      ) : (
        route.element
      ),
    };

    if (route.children) {
      routeProps.element = <Children routes={route.children} />;
    }

    return <RouteComponent {...routeProps} />;
  });
};

const Children = ({ routes }) => {
  return (
    <Routes>
      {routes.map((child, index) => (
        <Route key={index} path={child.path} element={child.element} />
      ))}
    </Routes>
  );
};

const Routing = () => {
  const allRoutes = [...privateRoutes, ...publicRoutes];

  return <Routes>{renderRoutes(allRoutes)}</Routes>;
};

export default Routing;
