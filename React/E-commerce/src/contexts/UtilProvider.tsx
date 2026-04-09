import type React from "react";
import useUtils from "../hooks/useUtils";
import UtilContext from "./UitlContext";


const UtilProvider = ({ children }: { children: React.ReactNode }) => {

    const { loading, error, setError, setLoading } = useUtils();
    return (
        <UtilContext.Provider value={{ loading, error, setError, setLoading }}>
            {children}
        </UtilContext.Provider>
    )

}

export default UtilProvider;
