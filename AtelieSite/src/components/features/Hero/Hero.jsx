import React from "react";
import styles from "./Hero.module.css";
import Container from "../../ui/Container";
import Button from "../../ui/Button";
import Badge from "../../ui/Badge";
import { scrollToId } from "../../../utils/helpers";

function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <Container size="xl">
        <div className={styles.grid}>
          <div className={styles.content}>
            <Badge variant="accent">
              Inovando na arte do crochê
            </Badge>

            <h1 className={styles.headline}>
              Brincos, acessórios femininos e infantis{" "}
              <em>Entregamos em todo o Brasil</em>
            </h1>

            <p className={styles.body}>
              Ateliê Di Petta fabrica brincos, acessórios femininos e
              infantis com muito amor e dedicação.
            </p>

            <div className={styles.ctaRow}>
              <Button
                size="lg"
                onClick={() => scrollToId("contact")}
              >
                Fale conosco
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToId("features")}
              >
                Nossos Produtos
              </Button>
            </div>

            <span className={styles.microcopy}>
              Aceitamos encomendas personalizadas e pedidos em atacado.
              Entre em contato para mais informações.
            </span>
          </div>

          <div className={styles.heroImageWrap}>
            <img
              src="./hero.png"
              alt="Ateliê Di Petta - acessórios artesanais"
              className={styles.heroImage}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;