import { createContext, useContext } from "react";
import type { UtilContextType } from "../types/utilContext";

const UtilContext = createContext<UtilContextType | null>(null);

export const useUtilContext = () => {
    const context = useContext(UtilContext);
    if (!context) throw new Error("useUtilContext must be used within Util Provider");
    return context;
}

export default UtilContext;