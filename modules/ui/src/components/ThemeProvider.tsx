import React, { createContext, useMemo } from "react";
import { useColorScheme } from "react-native";
import { ColorsType, darkColors, lightColors } from "../styles/colors";

export const ThemeContext = createContext<{
  colors: ColorsType;
  theme: ReturnType<typeof useColorScheme>;
} | null>(null);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = useColorScheme();

  const colors = theme === "dark" ? darkColors : lightColors;

  const contextValue = useMemo(() => {
    return {
      colors: colors,
      theme: theme,
    };
  }, [colors, theme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
