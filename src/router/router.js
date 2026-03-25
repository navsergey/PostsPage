import MainPage from "../pages/MainPage/MainPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import CommentsPage from "../pages/CommentsPage/CommentsPage";

export const routes = [
    {path:"/posts", element: <MainPage/>},
    {path:"/about", element: <AboutPage/>},
    {path:"/posts/:id", element: <CommentsPage/>},
]