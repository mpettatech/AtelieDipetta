import { useEffect, useState } from "react";

/**
 * useMediaQuery — subscribes to a CSS media query and returns whether it matches.
 *
 * @param {string} query - e.g. "(max-width: 768px)"
 * @returns {boolean}
 *
 * @example
 * const isMobile = useMediaQuery("(max-width: 640px)");
 */
function useMediaQuery(query) {
  const getMatch = () =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : false;

  const [matches, setMatches] = useState(getMatch);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const handleChange = (event) => setMatches(event.matches);

    setMatches(mediaQueryList.matches);
    mediaQueryList.addEventListener("change", handleChange);

    return () => mediaQueryList.removeEventListener("change", handleChange);
  }, [query]);

  return matches;
}

export default useMediaQuery;
