import { useContext } from "react";
import styles from "./Header.module.css";
import Container from "../../ui/Container";
import Button from "../../ui/Button";
import Navigation from "../Navigation";
import useScrollPosition from "../../../hooks/useScrollPosition";
import useTheme from "../../../hooks/useTheme";
import { AppContext } from "../../../context/AppContext";
import { SITE_NAME } from "../../../utils/constants";
import { scrollToId } from "../../../utils/helpers";

/**
 * Header — sticky site header with blur-on-scroll, desktop navigation,
 * theme toggle, and a mobile menu trigger.
 *
 * @example
 * <Header />
 */
function Header() {
  const { isScrolled } = useScrollPosition(24);
  const { theme, toggleTheme } = useTheme();
  const { toggleMobileMenu, isMobileMenuOpen } = useContext(AppContext);

  return (
    <header
      className={[styles.header, isScrolled ? styles.scrolled : ""].join(" ")}
    >
      <Container size="xl">
        <div className={styles.inner}>
          <a
            href="#top"
            className={styles.brand}
            onClick={(event) => {
              event.preventDefault();
              scrollToId("top", 0);
            }}
          >
            <span className={styles.brandMark} aria-hidden="true" />
            {SITE_NAME}
          </a>

          <div className={styles.desktopOnly}>
            <Navigation orientation="horizontal" />
          </div>

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.themeToggle}
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? "☀" : "☾"}
            </button>
            <div className={styles.desktopOnly}>
              <Button size="sm" onClick={() => scrollToId("contact")}>
                Book a demo
              </Button>
            </div>
            <button
              type="button"
              className={styles.menuButton}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
