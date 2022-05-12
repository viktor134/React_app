import Login from "../pages/login/Login";
import Posts from "../pages/posts/Posts";

export const privateRoutes = [
  {path: "/posts", component: <Posts />},
  {path: "*", component: <div></div>}
]
export const publicRoutes = [
  {path: "/login", component: <Login />},
  {path: "*", component: <div></div>}
]