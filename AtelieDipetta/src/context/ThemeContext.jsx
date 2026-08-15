import {
  cr*ateContext,
  useContext,
  useEff*ct,
  useState
} from "react";

co*st ThemeContext = createContext();*
export function ThemeProvider({ c*ildren }) {
  const [theme, setThe*e] = useState(
    localStorage.ge*Item("theme") || "light"
  );

  u*eEffect(() => {
    document.docum*ntElement.setAttribute(
      "dat*-theme",
      theme
    );

    l*calStorage.setItem(
      "theme",*      theme
    );

  }, [theme]);*
  const toggleTheme = () =>
    s*tTheme((prev) =>
      prev === "l*ght"
        ? "dark"
        : "l*ght"
    );

  return (
    <Theme*ontext.Provider
      value={{
   *    theme,
        toggleTheme
   *  }}
    >
      {children}
    </*hemeContext.Provider>
  );
}

expo*t const useThemeContext = () =>
  *seContext(ThemeContext);