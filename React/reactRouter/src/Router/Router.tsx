import { createBrowserRouter } from "react-router-dom"
import Home from "../Pages/Home"
import About from "../Pages/About"
import Login from "../Pages/Login"
import Dashboard from "../Pages/DashBoard"
import Profile from "../Pages/Profile"
import Admin from "../Pages/Admin"
import Unauthorized from "../Pages/Unauthorized"
import NotFound from "../Pages/Notfound"
import Layout from "../Components/Layout"
import ProtectedRoute from "../Components/ProtectedRoute"
import RoleRoute from "../Components/RoleRoute"

const routes = [
    {
        path: "/",
        element: <Layout />,
        errorElement: <Unauthorized />,
        children: [
            { index: true, element: <Home /> },
            { path: "about", element: <About /> },
            { path: "login", element: <Login /> },
            {
                element: <ProtectedRoute />,
                children: [
                    { path: "dashboard", element: <Dashboard /> },
                    { path: "profile", element: <Profile /> },
                ]
            },
            {
                element: <RoleRoute allowedRoles={["admin"]} />,
                children: [
                    { path: "admin", element: <Admin /> },
                ]
            },

            { path: "unauthorized", element: <Unauthorized /> }
        ]
    },
    { path: "*", element: <NotFound /> }
]

const Router = createBrowserRouter(routes);

export default Router
