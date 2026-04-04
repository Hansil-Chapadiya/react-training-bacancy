// import { useTheme } from "./Task4_Context";
// import { ThemeContext } from "../App";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const ThemeButton = () => {

  const context = useContext(ThemeContext);

  if(!context) return null;

  const { theme, handleTheme } = context;

  return (
    <button onClick={handleTheme} className={theme}>
        Click
    </button>
  );
};

export default ThemeButton;