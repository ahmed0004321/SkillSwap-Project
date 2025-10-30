import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Page/Home";
import Profile from "../Page/Profile";
import Providers from "../Page/Providers";
import SkillDetails from "../Page/SkillDetails";
import Register from "../Page/Register";
import Login from "../Page/Login";
import PrivateRoutes from "../Components/PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/skill.JSON'),
                children: [
                    {
                        path: '/',
                        element: <Providers></Providers>,
                        loader: () => fetch('/providers.JSON'),
                    }
                ]
            },
        ]
    },
    {
        path: '/skillDetails/:id',
        element: <PrivateRoutes>
            <SkillDetails></SkillDetails>,
        </PrivateRoutes>,
        loader: () => fetch('/skill.JSON'),
    },
    {
        path: '/profile',
        element: <Profile></Profile>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '*',
        element: <h2>Error 404</h2>
    }
])
export default router;