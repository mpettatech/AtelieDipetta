import React from "react";
import PropTypes from "prop-types";
import styles from "./Spinner.module.css";

/**
 * Spinner — indeterminate loading indicator.
 *
 * @example
 * <Spinner size="md" color="accent" label="Loading pricing..." />
 */
function Spinner({ size = "md", color = "accent", label = "Loading" }) {
  const classNames = [styles.spinner, styles[size], styles[color]]
    .filter(Boolean)
    .join(" ");

  return (
    <span
      className={classNames}
      role="status"
      aria-label={label}
    >
      <span className="visually-hidden">{label}</span>
    </span>
  );
}

Spinner.propTypes = {
  /** Diameter of the spinner */
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  /** Stroke color */
  color: PropTypes.oneOf(["accent", "muted", "onDark"]),
  /** Accessible label announced to screen readers */
  label: PropTypes.string,
};

export default Spinner;
