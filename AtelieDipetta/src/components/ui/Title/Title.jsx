import PropTypes from "prop-types";
import styles from "./Title.module.css";

/**
 * Title — section heading with optional eyebrow, subtitle, alignment
 * and gradient text treatment.
 *
 * @example
 * <Title
 *   as="h2"
 *   eyebrow="Why Meridian"
 *   subtitle="Every teammate sees the same overlap, in their own local time."
 *   align="center"
 *   gradient
 * >
 *   One shared clock for every timezone
 * </Title>
 */
function Title({
  children,
  as: Tag = "h2",
  size = "md",
  align = "left",
  eyebrow,
  subtitle,
  gradient = false,
}) {
  return (
    <div className={[styles.wrap, styles[align]].join(" ")}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <Tag
        className={[
          styles.title,
          styles[`size-${size}`],
          gradient ? styles.gradient : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {children}
      </Tag>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
  /** Heading element rendered */
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4"]),
  /** Font-size scale, independent of heading level */
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  /** Text + flex alignment */
  align: PropTypes.oneOf(["left", "center"]),
  /** Small uppercase label shown above the title */
  eyebrow: PropTypes.string,
  /** Supporting copy shown below the title */
  subtitle: PropTypes.node,
  /** Applies a gradient text fill */
  gradient: PropTypes.bool,
};

export default Title;
