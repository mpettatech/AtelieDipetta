import React from "react";
import PropTypes from "prop-types";
import styles from "./Navigation.module.css";
import { NAV_LINKS } from "../../../utils/constants";
import { scrollToId } from "../../../utils/helpers";

/**
 * Navigation — renders the shared NAV_LINKS as an in-page anchor list.
 * Used horizontally in the desktop header and vertically in the mobile menu.
 *
 * @example
 * <Navigation orientation="horizontal" />
 *
 * @example
 * <Navigation orientation="vertical" onLinkClick={closeMobileMenu} />
 */
function Navigation({ orientation = "horizontal", onLinkClick }) {
  const handleClick = (event, href) => {
    event.preventDefault();
    scrollToId(href.replace("#", ""));
    onLinkClick?.();
  };

  return (
    <nav
      className={styles[orientation]}
      aria-label={orientation === "horizontal" ? "Primary" : "Mobile"}
    >
      {NAV_LINKS.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className={styles.link}
          onClick={(event) => handleClick(event, link.href)}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}

Navigation.propTypes = {
  /** Layout direction */
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
  /** Called after a link is clicked, e.g. to close the mobile menu */
  onLinkClick: PropTypes.func,
};

export default Navigation;
