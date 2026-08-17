import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";
import Spinner from "../Spinner";

/**
 * Button — the primary interactive control used across the site.
 *
 * @example
 * <Button variant="primary" size="md" onClick={handleClick}>
 *   Start free trial
 * </Button>
 *
 * @example
 * <Button variant="outline" icon={<ArrowIcon />} iconPosition="right">
 *   Learn more
 * </Button>
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  fullWidth = false,
  icon = null,
  iconPosition = "left",
  type = "button",
  onClick,
  ariaLabel,
  ...rest
}) {
  const classNames = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={classNames}
      disabled={disabled || loading}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-busy={loading || undefined}
      {...rest}
    >
      {loading && (
        <span className={styles.spinnerWrap}>
          <Spinner size="sm" />
        </span>
      )}
      <span
        className={[styles.label, loading ? styles.labelHidden : ""]
          .filter(Boolean)
          .join(" ")}
      >
        {icon && (
          <span
            className={[
              styles.icon,
              iconPosition === "left" ? styles.iconLeft : "",
            ]
              .filter(Boolean)
              .join(" ")}
            aria-hidden="true"
          >
            {icon}
          </span>
        )}
        {children}
      </span>
    </button>
  );
}

Button.propTypes = {
  /** Button content (label text or nodes) */
  children: PropTypes.node.isRequired,
  /** Visual style of the button */
  variant: PropTypes.oneOf(["primary", "secondary", "outline", "ghost"]),
  /** Button height / padding scale */
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  /** Shows a spinner and disables interaction */
  loading: PropTypes.bool,
  /** Disables the button */
  disabled: PropTypes.bool,
  /** Stretches the button to fill its container */
  fullWidth: PropTypes.bool,
  /** Optional icon element rendered next to the label */
  icon: PropTypes.node,
  /** Which side the icon renders on */
  iconPosition: PropTypes.oneOf(["left", "right"]),
  /** Native button type attribute */
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  /** Click handler */
  onClick: PropTypes.func,
  /** Accessible label, useful for icon-only buttons */
  ariaLabel: PropTypes.string,
};

export default Button;
