import { Navigate, createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Category/Category";
import News from "../Pages/News/News";
import NewsLayout from "../Layout/NewsLayout";
import Register from "../Pages/Register/Register";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../Pages/Login/Login";
import PrivateRout from "./PrivateRout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to='/category/0'></Navigate>
            },
            {
                path: '/login',
                element:<Login/>
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    },
    {
        path: 'category',
        element: <MainLayout />,
        children: [

            {
                path: '/category/:id',
                element: <Category />,
                loader: ({ params }) => fetch(`https://the-news-dragon-server-absiddik676.vercel.app/categorys/${params.id}`)
            },

        ]
    },
    {
        path: '/news',
        element: <NewsLayout />,
        children: [
            {
                path: ':id',
                element: <PrivateRout><News /></PrivateRout>,
                loader: ({ params }) => fetch(`https://the-news-dragon-server-absiddik676.vercel.app/news/${params.id}`)
            }
        ]

    },
])

export default router

// {
//     path:'category',
//     element:<Category/>,
//     loader:()=>fetch('https://the-news-dragon-server-absiddik676.vercel.app/news')
// }