import React from "react";
import styles from "./Footer.module.css";
import Container from "../../ui/Container";
import {SITE_NAME, NAV_LINKS} from "../../../utils/constants";
import {
  Camera,
  MessageCircle,
} from "lucide-react";

const SOCIAL_LINKS = [
  {
    label: "Camera",
    href: "https://www.instagram.com/ateliedipetta/",
    icon: <Camera size={20} strokeWidth={1.8} />,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/5511999999999",
    icon: <MessageCircle size={20} strokeWidth={1.8} />,
  },
];
function Footer() {
  return (
    <footer className={styles.footer}>
      <Container size="xl">
        <div className={styles.grid}>
          {/* Marca */}
          <div className={styles.brandCol}>
            <span className={styles.brand}>
              <span className={styles.brandMark} aria-hidden="true" />
              {SITE_NAME}
            </span>

            <p className={styles.tagline}>
              Entre em contato no WhatsApp ou Instagram 👇
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
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navegação */}
          <div>
            <p className={styles.colTitle}>Navegação</p>

            <nav className={styles.linkList} aria-label="Navegação">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Sobre */}
          <div>
            <p className={styles.colTitle}>Sobre</p>

            <nav className={styles.linkList} aria-label="Sobre">
              <a href="#about">O Ateliê</a>
              <a href="#partners">Parceiros</a>
              <a href="#testimonials">Depoimentos</a>
              <a href="#contact">Contato</a>
            </nav>
          </div>
      <div className={styles.bottomRow}>
            <span>
             © {new Date().getFullYear()} {SITE_NAME}. Todos os direitos reservados.
           </span>

           <span>
            Desenvolvido por{" "}
            <a
             href="https://mpettatech.github.io/PettaTech/"
             target="_blank"
             rel="noopener noreferrer"
            >
             PettaTech
            </a>
           </span>
         </div>
    </div>
      </Container>
    </footer>
  );
}

export default Footer;