import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Category/Category";
import News from "../Pages/News/News";
import NewsLayout from "../Layout/NewsLayout";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/category/:id',
                element:<Category/>,
                loader:({params})=>fetch(`http://localhost:3000/categorys/${params.id}`)
            },
            {
                path:'/news/:id',
                element:<News/>
            }
        ]
    },
    {
        path:'news',
        element:<NewsLayout/>,
        children:[
            {
                path:':id',
                element:<News/>
            }
        ]

    }
])

export default router