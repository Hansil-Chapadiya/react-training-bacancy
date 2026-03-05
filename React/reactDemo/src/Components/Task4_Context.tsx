// import { createContext, useContext } from "react";

// export type ThemeContextType = {
//   theme: "light" | "dark";
//   handleTheme: () => void;
// };

// export const ThemeContext = createContext<ThemeContextType | null>(null);

// export const useTheme = () => {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error("useTheme must be used inside ThemeContext.Provider");
//   }
//   return context;
// };