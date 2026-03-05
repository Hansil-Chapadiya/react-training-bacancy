import React from "react";

type ThemeContextType = {
    theme: "light" | "dark",
    handleTheme: () => void;
};


const ThemeContext = React.createContext<ThemeContextType | null>(null);

export { ThemeContext }