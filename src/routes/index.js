import { Suspense, lazy } from "react";
import { Navigate, useRoutes, useLocation } from "react-router-dom";
// layouts
import Layout from "../layouts";
// components
import LoadingScreen from "../components/LoadingScreen";

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  return (
    <Suspense
      fallback={<LoadingScreen isDashboard={pathname.includes("/dashboard")} />}
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { element: <HomePage />, index: true },
        // { path: "privacypolicy", element: <PrivacyPage /> },
        // { path: "useofcookie", element: <UseofCookiePage /> },
      ],
    },
    {
      path: "*",
      children: [
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

const HomePage = Loadable(lazy(() => import("../pages/HomePage")));
const Page404 = Loadable(lazy(() => import("../pages/Page404")));
// const PrivacyPage = Loadable(lazy(() => import("../pages/PrivacyPage")));
// const UseofCookiePage = Loadable(
//   lazy(() => import("../pages/UseofCookiePage"))
// );
