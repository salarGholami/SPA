import AboutUs from "./pages/AboutUs";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";

const routers = [
  { path: "/", Element: <HomePage /> },
  { path: "/about-us", Element: <AboutUs /> },
  { path: "/profile", Element: <Profile /> },
];

export default routers;
