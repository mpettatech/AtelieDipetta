import PropTypes from "prop-types";
import styles from "./Container.module.css";

/**
 * Container — centers content and caps its width responsively.
 *
 * @example
 * <Container size="lg">
 *   <p>Content constrained to 1120px, centered with gutters.</p>
 * </Container>
 */
function Container({ children, size = "lg", as: Tag = "div", className = "" }) {
  const classNames = [styles.container, styles[size], className]
    .filter(Boolean)
    .join(" ");

  return <Tag className={classNames}>{children}</Tag>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  /** Max-width breakpoint */
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "full"]),
  /** Element/component to render as */
  as: PropTypes.elementType,
  className: PropTypes.string,
};

export default Container;
