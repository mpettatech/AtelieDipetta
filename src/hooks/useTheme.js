import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

/**
 * useTheme — access the current theme ("light" | "dark") and a toggler.
 * Must be used within <ThemeProvider>.
 *
 * @example
 * const { theme, toggleTheme } = useTheme();
 */
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export default useTheme;
