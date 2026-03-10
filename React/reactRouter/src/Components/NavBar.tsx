import { NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


function Navbar() {

    const { user, isAuthenticated, logout } = useAuth();

    return (
        <nav>

            <NavLink to="/">Home</NavLink> |{" "}
            <NavLink to="/about">About</NavLink>

            {!isAuthenticated && (
                <>
                    {" | "}
                    <NavLink to="/login">Login</NavLink>
                </>
            )}

            {isAuthenticated && (
                <>
                    {" | "}
                    <NavLink to="/dashboard">Dashboard</NavLink>

                    {" | "}
                    <NavLink to="/profile">Profile</NavLink>
                </>
            )}

            {user?.role === "admin" && (
                <>
                    {" | "}
                    <NavLink to="/admin">Admin</NavLink>
                </>
            )}

            {isAuthenticated && (
                <>
                    {" | "}
                    <button onClick={logout}>Logout</button>
                </>
            )}

        </nav>
    );
}

export default Navbar;