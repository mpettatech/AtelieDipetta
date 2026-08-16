import React, { Children, cloneElement, isValidElement, useId, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Tooltip.module.css";

/**
 * Tooltip — hover/focus label anchored to its child, positioned in one
 * of four directions.
 *
 * @example
 * <Tooltip content="Shows time overlap for the whole team" position="top">
 *   <Button variant="ghost">Overlap</Button>
 * </Tooltip>
 */
function Tooltip({ children, content, position = "top" }) {
  const [visible, setVisible] = useState(false);
  const tooltipId = useId();

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  return (
    <span
      className={styles.wrap}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {isValidElement(children)
        ? cloneElement(Children.only(children), {
            "aria-describedby": tooltipId,
          })
        : <span aria-describedby={tooltipId}>{children}</span>}
      <span
        role="tooltip"
        id={tooltipId}
        className={[
          styles.tooltip,
          styles[position],
          visible ? styles.visible : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {content}
      </span>
    </span>
  );
}

Tooltip.propTypes = {
  /** Element the tooltip is anchored to */
  children: PropTypes.node.isRequired,
  /** Tooltip text */
  content: PropTypes.node.isRequired,
  /** Which side the tooltip appears on */
  position: PropTypes.oneOf(["top", "bottom", "left", "right"]),
};

export default Tooltip;
