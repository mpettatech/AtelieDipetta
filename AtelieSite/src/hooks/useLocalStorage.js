import { useEffect, useState } from "react";

/**
 * useLocalStorage — React state that's synced to localStorage.
 *
 * @param {string} key - localStorage key
 * @param {*} initialValue - value used if nothing is stored yet
 * @returns {[*, Function]} current value and a setter (same shape as useState)
 *
 * @example
 * const [theme, setTheme] = useLocalStorage("Ateliê Di Petta-theme", "dark");
 */
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    if (typeof window === "undefined") return initialValue;
    try {
      const stored = window.localStorage.getItem(key);
      return stored !== null ? JSON.parse(stored) : initialValue;
    } catch (error) {
      console.warn(`useLocalStorage: failed to read "${key}"`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn(`useLocalStorage: failed to write "${key}"`, error);
    }
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
