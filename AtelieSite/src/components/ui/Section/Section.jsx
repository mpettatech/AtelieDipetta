import React from "react";
import PropTypes from "prop-types";
import styles from "./Section.module.css";

/**
 * Section — full-width page block with configurable vertical padding
 * and background treatment. Pair with <Container> for content width.
 *
 * @example
 * <Section padding="lg" background="gradient" id="pricing">
 *   <Container><Pricing /></Container>
 * </Section>
 */
function Section({
  children,
  padding = "md",
  background = "base",
  bordered = false,
  id,
  className = "",
  ...rest
}) {
  const classNames = [
    styles.section,
    styles[`padding-${padding}`],
    styles[`bg-${background}`],
    bordered ? styles.bordered : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className={classNames} {...rest}>
      {children}
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  /** Vertical padding scale */
  padding: PropTypes.oneOf(["none", "sm", "md", "lg"]),
  /** Background treatment */
  background: PropTypes.oneOf(["base", "elevated", "gradient", "transparent"]),
  /** Adds a top divider rule */
  bordered: PropTypes.bool,
  id: PropTypes.string,
  className: PropTypes.string,
};

export default Section;
