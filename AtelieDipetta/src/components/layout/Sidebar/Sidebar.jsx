import React from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import styles from "./Sidebar.module.css";
import Navigation from "../Navigation";
import Button from "../../ui/Button";
import { SITE_NAME } from "../../../utils/constants";
import { scrollToId } from "../../../utils/helpers";

/**
 * Sidebar — slide-in drawer used as the mobile navigation menu. Reuses
 * <Navigation orientation="vertical"> for its link list.
 *
 * @example
 * <Sidebar open={isMobileMenuOpen} onClose={closeMobileMenu} />
 */
function Sidebar({ open, onClose }) {
  if (!open) return null;

  return createPortal(
    <>
      <div className={styles.backdrop} onClick={onClose} />
      <aside
        id="mobile-navigation"
        className={styles.sidebar}
        aria-label="Mobile navigation"
      >
        <div className={styles.header}>
          <span className={styles.brand}>{SITE_NAME}</span>
          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <Navigation orientation="vertical" onLinkClick={onClose} />

        <div className={styles.footer}>
          <Button
            fullWidth
            onClick={() => {
              scrollToId("contact");
              onClose();
            }}
          >
            Book a demo
          </Button>
        </div>
      </aside>
    </>,
    document.body
  );
}

Sidebar.propTypes = {
  /** Controls visibility */
  open: PropTypes.bool.isRequired,
  /** Called to close the drawer */
  onClose: PropTypes.func.isRequired,
};

export default Sidebar;
