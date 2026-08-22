import React from "react";
import styles from "./Partners.module.css";
import Container from "../../ui/Container";
import Section from "../../ui/Section";

const PARTNERS = [
  {
    name: "Tendarte",
    logo: "/tendarte.jpg",
    url: "https://www.instagram.com/tendarteartesanato/",
  },

  
  {
    name: "ATEMDO",
    logo: "/atemdoLogo.png",
    url: "https://www.atemdo.org/",
  },
  {
    name: "Feira Agro de Mulheres",
    logo: "/agro.jpg",
    url: "https://www.instagram.com/feira_mulheres/",
  },
  
];

function Partners() {
  return (
    <>
      <Section id="partners" padding="lg">
        <Container>
          <h2>Nossos Parceiros</h2>
          <div className={styles.grid}>
            {PARTNERS.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.logo}
              >
                <img
                  src={partner.logo}
                  alt={`Logo ${partner.name}`}
                />
              </a>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

export default Partners;