import { useId } from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.css";

/**
 * Input — labeled text field with helper text and error state.
 *
 * @example
 * <Input
 *   label="Work email"
 *   type="email"
 *   placeholder="you@company.com"
 *   required
 *   value={email}
 *   onChange={(e) => setEmail(e.target.value)}
 *   error={errors.email}
 * />
 */
function Input({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  required = false,
  disabled = false,
  error,
  helperText,
  iconLeft,
  iconRight,
  ...rest
}) {
  const generatedId = useId();
  const inputId = id || generatedId;
  const helperId = `${inputId}-helper`;
  const errorId = `${inputId}-error`;

  return (
    <div className={styles.field}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <div className={styles.inputWrap}>
        {iconLeft && (
          <span className={styles.iconLeft} aria-hidden="true">
            {iconLeft}
          </span>
        )}
        <input
          id={inputId}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          required={required}
          disabled={disabled}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : helperText ? helperId : undefined}
          className={[
            styles.input,
            iconLeft ? styles.hasIconLeft : "",
            iconRight ? styles.hasIconRight : "",
            error ? styles.error : "",
          ]
            .filter(Boolean)
            .join(" ")}
          {...rest}
        />
        {iconRight && (
          <span className={styles.iconRight} aria-hidden="true">
            {iconRight}
          </span>
        )}
      </div>
      {error ? (
        <span id={errorId} className={styles.errorText} role="alert">
          {error}
        </span>
      ) : (
        helperText && (
          <span id={helperId} className={styles.helper}>
            {helperText}
          </span>
        )
      )}
    </div>
  );
}

Input.propTypes = {
  /** Field label */
  label: PropTypes.string,
  /** Explicit id; auto-generated if omitted */
  id: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  /** Error message; also switches the field into an invalid visual state */
  error: PropTypes.string,
  /** Helper copy shown when there's no error */
  helperText: PropTypes.string,
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
};

export default Input;
