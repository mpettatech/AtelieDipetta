import { useEffect, useState } from "react";

/**
 * useScrollPosition — tracks window scrollY and derives a couple of
 * commonly-needed flags (past a threshold, scroll direction).
 *
 * @param {number} threshold - px scrolled before `isScrolled` flips true
 * @returns {{ scrollY: number, isScrolled: boolean, direction: "up" | "down" }}
 *
 * @example
 * const { isScrolled } = useScrollPosition(24);
 * // used to add a blurred / shrunk state to a sticky header
 */
function useScrollPosition(threshold = 16) {
  const [state, setState] = useState({
    scrollY: 0,
    isScrolled: false,
    direction: "up",
  });

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const currentY = window.scrollY;
      setState({
        scrollY: currentY,
        isScrolled: currentY > threshold,
        direction: currentY > lastY ? "down" : "up",
      });
      lastY = currentY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    update();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return state;
}

export default useScrollPosition;
