import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Badge.module.css";

/**
 * Badge — small status or count label.
 *
 * @example
 * <Badge variant="success">Live</Badge>
 *
 * @example
 * <Badge variant="accent" count={4} />
 *
 * @example
 * <Badge dismissible onDismiss={() => console.log("dismissed")}>
 *   Beta feature
 * </Badge>
 */
function Badge({
  children,
  variant = "neutral",
  count,
  dismissible = false,
  onDismiss,
}) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const handleDismiss = () => {
    setVisible(false);
    onDismiss?.();
  };

  return (
    <span className={[styles.badge, styles[variant]].join(" ")}>
      {children}
      {typeof count === "number" && (
        <span className={styles.count}>
          <span>{count > 99 ? "99+" : count}</span>
        </span>
      )}
      {dismissible && (
        <button
          type="button"
          className={styles.dismiss}
          onClick={handleDismiss}
          aria-label="Dismiss"
        >
          ×
        </button>
      )}
    </span>
  );
}

Badge.propTypes = {
  children: PropTypes.node,
  /** Color treatment */
  variant: PropTypes.oneOf([
    "neutral",
    "accent",
    "secondary",
    "success",
    "danger",
  ]),
  /** Optional numeric counter shown as a pill */
  count: PropTypes.number,
  /** Shows a close button that hides the badge */
  dismissible: PropTypes.bool,
  /** Called after the badge is dismissed */
  onDismiss: PropTypes.func,
};

export default Badge;
