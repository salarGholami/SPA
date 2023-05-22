import AboutUs from "./pages/AboutUs";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";

const routers = [
  { path: "/", element: <HomePage /> },
  { path: "/about-us", element: <AboutUs /> },
  { path: "/profile", element: <Profile /> },
  { path: "/*", element: <NotFound /> },
];

export default routers;
