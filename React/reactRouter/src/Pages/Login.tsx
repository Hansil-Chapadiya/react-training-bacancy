import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth"

const Login = () => {

    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/dashboard";

    const handleLogin = (role: string) => {
        login(role);
        setTimeout(() => {
            navigate(from, { replace: true })
        }, 1000);
    }


    return (
        <>
            <div>
                <h1>Login Page</h1>
            </div>
            <button onClick={() => handleLogin("user")}>
                Login as user
            </button>
            <button onClick={() => handleLogin("admin")}>
                Login as admin
            </button>
        </>
    )
}

export default Login;
