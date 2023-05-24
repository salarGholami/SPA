import Blog from "./component/Blog/Blog";
import AboutUs from "./pages/AboutUs";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import PostPage from "./pages/PostPage";
import Profile from "./pages/Profile";

const routers = [
  { path: "/", element: <HomePage /> },
  { path: "/about-us", element: <AboutUs /> },
  { path: "/profile/*", element: <Profile /> },
  { path: "/blogs", element: <BlogPage /> },
  { path: "/blogs/:id", element: <Blog /> },
  { path: "/post/:id([0-9]+)?", element: <PostPage /> },
  { path: "/*", element: <NotFound /> },
];

export default routers;
