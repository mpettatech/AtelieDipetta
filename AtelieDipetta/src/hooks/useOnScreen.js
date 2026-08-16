import { useEffect, useRef, useState } from "react";

/**
 * useOnScreen — IntersectionObserver-backed hook that reports whether an
 * element has entered the viewport. Powers the [data-reveal] scroll-in
 * animations defined in styles/animations.css.
 *
 * @param {Object} options
 * @param {number} [options.threshold=0.2] - fraction of the element visible before triggering
 * @param {string} [options.rootMargin="0px"]
 * @param {boolean} [options.once=true] - stop observing after first reveal
 * @returns {[React.RefObject, boolean]} ref to attach, and whether it's visible
 *
 * @example
 * const [ref, isVisible] = useOnScreen();
 * <div ref={ref} data-reveal className={isVisible ? "is-visible" : ""} />
 */
function useOnScreen({ threshold = 0.2, rootMargin = "0px", once = true } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(node);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, isVisible];
}

export default useOnScreen;
