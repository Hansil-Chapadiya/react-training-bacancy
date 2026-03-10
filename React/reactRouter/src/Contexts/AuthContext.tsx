/*

Create AuthContext.jsx with a useAuth() hook. Store user object ({ name, role }) and
isAuthenticated boolean in state. Provide a login(role) function that sets a fake user and
an isLoading flag. The login function should accept a role argument ('user' or 'admin') so
you can test both paths.

*/

import { createContext, useState, type ReactNode } from "react";

export const AuthContext = createContext<{
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (role: string) => void;
    logout: () => void;
} | undefined>(undefined);

type User = {
    name : string,
    role : string
}

export function AuthProvider({children}: {children: ReactNode}){

    const [user, setUser] = useState<User | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [isLoading , setIsLoading] = useState<boolean>(false);

    const login = (role:string) => {
        setIsLoading(true);

        setTimeout(()=>{
            const fakeUser = {
                name : "hansil",
                role : role
            };

            setUser(fakeUser);
            setIsAuthenticated(true);
            setIsLoading(false);
        }, 1000);
        
    }

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
    }

    return (
        <AuthContext.Provider 
            value={{
                user,
                isAuthenticated,
                isLoading,
                login,
                logout
            }}
        > {children}</AuthContext.Provider>
    )

}