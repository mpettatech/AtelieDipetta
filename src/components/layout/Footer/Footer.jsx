import React, { useContext, useState } from "react";
import styles from "./Footer.module.css";
import Container from "../../ui/Container";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { AppContext } from "../../../context/AppContext";
import { SITE_NAME, SOCIAL_LINKS, NAV_LINKS } from "../../../utils/constants";
import { isValidEmail } from "../../../utils/helpers";

const RESOURCE_LINKS = [
  { label: "Documentation", href: "#" },
  { label: "API status", href: "#" },
  { label: "Changelog", href: "#" },
  { label: "Support", href: "#" },
];

const COMPANY_LINKS = [
  { label: "About", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
];

/**
 * Footer — site footer with brand column, link columns, social links,
 * and a newsletter signup form wired to the toast system.
 *
 * @example
 * <Footer />
 */
function Footer() {
  const { addToast } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValidEmail(email)) {
      setError("Enter a valid email address");
      return;
    }
    setError("");
    setEmail("");
    addToast({
      variant: "success",
      title: "You're subscribed",
      message: "We'll send the occasional product update, nothing else.",
    });
  };

  return (
    <footer className={styles.footer}>
      <Container size="xl">
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <span className={styles.brand}>
              <span className={styles.brandMark} aria-hidden="true" />
              {SITE_NAME}
            </span>
            <p className={styles.tagline}>
              One shared clock for teams spread across every timezone.
            </p>
            <div className={styles.socialRow}>
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={social.label}
                >
                  {social.label.slice(0, 2).toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className={styles.colTitle}>Product</p>
            <nav className={styles.linkList} aria-label="Product">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className={styles.colTitle}>Resources</p>
            <nav className={styles.linkList} aria-label="Resources">
              {RESOURCE_LINKS.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className={styles.colTitle}>Company</p>
            <nav className={styles.linkList} aria-label="Company">
              {COMPANY_LINKS.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
            <form className={styles.newsletterForm} onSubmit={handleSubmit}>
              <Input
                aria-label="Email address"
                placeholder="you@company.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                error={error}
              />
              <Button type="submit" size="md" variant="outline">
                Join
              </Button>
            </form>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <span>
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </span>
          <span>Built with React 19 &amp; Vite</span>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
