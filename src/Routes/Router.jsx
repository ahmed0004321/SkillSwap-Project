import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Page/Home";
import Profile from "../Page/Profile";
import Providers from "../Page/Providers";
import SkillDetails from "../Page/SkillDetails";

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
        element: <SkillDetails></SkillDetails>,
        loader: () => fetch('/skill.JSON'),
    },
    {
        path: '/profile',
        element: <Profile></Profile>
    },
])
export default router;