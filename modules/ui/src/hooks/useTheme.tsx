import { useContext } from "react";
import { ThemeContext } from "../components/ThemeProvider";

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("Using theme value outside context theme");
  }

  return {
    theme: context.theme,
    colors: context.colors,
  };
};
