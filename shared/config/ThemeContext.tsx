import { createContext, useContext } from "react";
import theme from "@/shared/styles/theme";

const ThemeContext = createContext(theme);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
