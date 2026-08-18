import React from "react";
import styles from "./About.module.css";
import Container from "../../ui/Container";
import Section from "../../ui/Section";
import Title from "../../ui/Title";
import { Star } from "lucide-react";
import sobreImage from "./sobre.jpg";
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
            <img
              src={sobreImage}
              alt=""
              aria-hidden="true"
              className={styles.worldGrid}
            />
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
