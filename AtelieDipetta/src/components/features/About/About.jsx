import React from "react";
import styles from "./About.module.css";
import Container from "../../ui/Container";
import Section from "../../ui/Section";
import Title from "../../ui/Title";
import { Star } from "lucide-react";
/**
 * About — company/product story section with an illustrative graphic
 * on one side and copy + supporting stats on the other.
 *
 * @example
 * <About />
 */
function About() {
  return (
    <Section padding="lg" background="elevated" bordered>
      <Container size="xl">
        <div className={styles.grid}>
          <div className={styles.imageWrap}>
            <svg viewBox="0 0 200 150" className={styles.worldGrid} aria-hidden="true">
              {Array.from({ length: 6 }).map((_, i) => (
                <line
                  key={`h-${i}`}
                  x1="0"
                  x2="200"
                  y1={i * 25 + 12}
                  y2={i * 25 + 12}
                  className={styles.gridLine}
                />
              ))}
              {Array.from({ length: 8 }).map((_, i) => (
                <line
                  key={`v-${i}`}
                  x1={i * 25 + 12}
                  x2={i * 25 + 12}
                  y1="0"
                  y2="150"
                  className={styles.gridLine}
                />
              ))}
              <circle className={styles.gridDot} cx="37" cy="62" r="4" />
              <circle className={styles.gridDot} cx="87" cy="37" r="4" />
              <circle className={styles.gridDot} cx="137" cy="87" r="4" />
              <circle className={styles.gridDot} cx="162" cy="112" r="4" />
            </svg>
          </div>

          <div>
            <Title eyebrow="Nossa história" size="lg">
              Feito à mão com carinho e dedicação
            </Title>
            <p className={styles.body}>
              Ateliê Di Petta é uma marca focada na produção de peças e mimos artesanais em crochê.
              Cada item é feito inteiramente à mão, visando entregar qualidade e afeto em forma de 
              acessórios e decorações.
            </p>
            <div className={styles.statRow}>
              <div>
                <div className={styles.statNumber}>+ de 1500 peças feitas</div>
                <div className={styles.statLabel}>+ de 100 receitas próprias</div>
              </div>
              <div>
                <div className={styles.statNumber}>+ de 100</div>
                <div className={styles.statLabel}>participações em eventos</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default About;
