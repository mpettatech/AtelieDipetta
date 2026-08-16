import { createContext, useEffect } from "react";
import PropTypes from "prop-types";
import useLocalStorage from "../hooks/useLocalStorage";

export const ThemeContext = createContext(null);

/**
 * ThemeProvider — owns the light/dark theme, persists it to localStorage,
 * and reflects it onto <html data-theme="..."> so CSS variables in
 * variables.css switch automatically.
 *
 * @example
 * <ThemeProvider>
 *   <App />
 * </ThemeProvider>
 */
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useLocalStorage("meridian-theme", "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
