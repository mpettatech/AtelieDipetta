import React, { useEffect, useState } from "react";
import styles from "./ProgressBar.module.css";

/**
 * ProgressBar — thin bar fixed to the top of the viewport that fills as
 * the user scrolls down the page.
 *
 * @example
 * <ProgressBar />
 */
function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const max = scrollHeight - clientHeight;
      setProgress(max > 0 ? (scrollTop / max) * 100 : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.track} aria-hidden="true">
      <div className={styles.fill} style={{ width: `${progress}%` }} />
    </div>
  );
}

export default ProgressBar;
