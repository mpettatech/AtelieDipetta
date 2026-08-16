import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";

/**
 * Modal — dialog rendered in a portal with backdrop click, Escape-to-close,
 * and basic focus handling.
 *
 * @example
 * <Modal open={isOpen} onClose={() => setIsOpen(false)} title="Book a demo">
 *   <p>Pick a time that works across your team's timezones.</p>
 * </Modal>
 */
function Modal({ open, onClose, title, children }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    modalRef.current?.focus();

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = overflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) onClose();
  };

  return createPortal(
    <div className={styles.backdrop} onMouseDown={handleBackdropClick}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "modal-title" : undefined}
        tabIndex={-1}
        ref={modalRef}
      >
        {title && (
          <div className={styles.header}>
            <h2 id="modal-title" className={styles.title}>
              {title}
            </h2>
            <button
              type="button"
              className={styles.closeButton}
              onClick={onClose}
              aria-label="Close dialog"
            >
              ×
            </button>
          </div>
        )}
        <div className={styles.body}>{children}</div>
      </div>
    </div>,
    document.body
  );
}

Modal.propTypes = {
  /** Controls visibility */
  open: PropTypes.bool.isRequired,
  /** Called on Escape, backdrop click, or close button */
  onClose: PropTypes.func.isRequired,
  /** Optional dialog title, rendered with a close button */
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Modal;
