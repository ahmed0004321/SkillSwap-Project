import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Page/Home";
import Profile from "../Page/Profile";
import Providers from "../Page/Providers";
import SkillDetails from "../Page/SkillDetails";
import Register from "../Page/Register";
import Login from "../Page/Login";
import PrivateRoutes from "../Components/PrivateRoutes";
import ForgetPassword from "../Page/ForgetPassword";
import Loading from "../Components/Loading";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/skill.JSON'),
                hydrateFallbackElement: <Loading></Loading>,
                children: [
                    {
                        path: '/',
                        element: <Providers></Providers>,
                        loader: () => fetch('/providers.JSON'),
                        hydrateFallbackElement: <Loading></Loading>,
                    },
                ]
            },
        ]
    },
    {
        path: '/skillDetails/:id',
        element: <PrivateRoutes>
            <SkillDetails></SkillDetails>
        </PrivateRoutes>,
        loader: () => fetch('/skill.JSON'),
        hydrateFallbackElement: <Loading></Loading>,
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
        path: '/forgetPassword',
        element: <ForgetPassword></ForgetPassword>
    },
    {
        path: '*',
        element: <h2>Error 404</h2>
    }
])
export default router;