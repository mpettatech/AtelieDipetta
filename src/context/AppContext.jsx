import React, { createContext, useCallback, useState } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext(null);

/**
 * AppProvider — small app-wide UI state that doesn't warrant its own
 * context: mobile menu open state and toast notifications.
 *
 * @example
 * <AppProvider>
 *   <App />
 * </AppProvider>
 */
export function AppProvider({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [toasts, setToasts] = useState([]);

  const toggleMobileMenu = useCallback(
    () => setIsMobileMenuOpen((open) => !open),
    []
  );
  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  const addToast = useCallback((toast) => {
    const id = crypto.randomUUID();
    setToasts((current) => [...current, { id, variant: "info", ...toast }]);

    if (toast.duration !== 0) {
      setTimeout(() => {
        setToasts((current) => current.filter((item) => item.id !== id));
      }, toast.duration ?? 4000);
    }
    return id;
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((current) => current.filter((item) => item.id !== id));
  }, []);

  return (
    <AppContext.Provider
      value={{
        isMobileMenuOpen,
        toggleMobileMenu,
        closeMobileMenu,
        toasts,
        addToast,
        removeToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
