import React, { useContext } from "react";
import { createPortal } from "react-dom";
import styles from "./Toast.module.css";
import { AppContext } from "../../../context/AppContext";

const ICONS = { info: "i", success: "✓", danger: "!" };

/**
 * ToastViewport — renders active toasts from AppContext in a fixed
 * bottom-right stack. Mount once near the root of the app.
 *
 * @example
 * <AppProvider>
 *   <App />
 *   <ToastViewport />
 * </AppProvider>
 */
function ToastViewport() {
  const { toasts, removeToast } = useContext(AppContext);

  if (toasts.length === 0) return null;

  return createPortal(
    <div className={styles.viewport} role="region" aria-label="Notifications">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={[styles.toast, styles[toast.variant]].join(" ")}
          role="status"
        >
          <span className={styles.icon} aria-hidden="true">
            {ICONS[toast.variant] ?? ICONS.info}
          </span>
          <div className={styles.content}>
            {toast.title && <p className={styles.title}>{toast.title}</p>}
            {toast.message && <p className={styles.message}>{toast.message}</p>}
          </div>
          <button
            type="button"
            className={styles.dismiss}
            onClick={() => removeToast(toast.id)}
            aria-label="Dismiss notification"
          >
            ×
          </button>
        </div>
      ))}
    </div>,
    document.body
  );
}

export default ToastViewport;
