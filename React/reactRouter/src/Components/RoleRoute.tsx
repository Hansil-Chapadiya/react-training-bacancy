import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

interface RoleRouteProps {
    allowedRoles: string[];
}

const RoleRoute = ({ allowedRoles }: RoleRouteProps) => {

    const { user, isAuthenticated } = useAuth();
    const location = useLocation();

    if (!isAuthenticated) {
        return (
            <Navigate
                to="/login"
                state={{ from: location }}
                replace
            />
        )
    }

    if (!user?.role || !allowedRoles.includes(user.role)) {
        return (
            <Navigate
                to="/login"
                state={{ from: location }}
                replace
            />
        )
    }


    return (
        <Outlet />
    )
}

export default RoleRoute;
