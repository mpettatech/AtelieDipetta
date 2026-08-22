import React, { useEffect, useState } from "react";
import styles from "./Testimonials.module.css";
import Container from "../../ui/Container";
import Section from "../../ui/Section";
import Title from "../../ui/Title";

const TESTIMONIALS = [
  {
    quote:
      "Obrigada pelo carinho, eu Amei!!! ❤",
    name: "Isomar",
    photo: `${import.meta.env.BASE_URL}isomar.png`,
  },
  {
    quote:
      "Os brincos são o charme e destaque. Perfeição que só tem no @ateliedipetta 🥰",
    name: "Camila",
    photo: `${import.meta.env.BASE_URL}camila.png`,
  },
  {
    quote:
      "Produto lindo e feito com muito carinho ❤",
    name: "Cristiane",
    photo: `${import.meta.env.BASE_URL}cristiane.png`,
  },
  {quote:
      "Os melhores brincos que já tive! ❤",
    name: "Edileuza",
    photo: `${import.meta.env.BASE_URL}edileuza.png`,
  },
];

function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % TESTIMONIALS.length);
    }, 6000);

    return () => clearInterval(id);
  }, []);

  return (
    <Section id="testimonials" padding="lg">
      <Container size="md">
        <div className={styles.header}>
          <Title align="center" eyebrow="Quem já conhece nosso trabalho">
            O que nossas clientes dizem
          </Title>
        </div>

        <div className={styles.carousel}>
          <div className={styles.track}>
            <div
              className={styles.slides}
              style={{
                transform: `translateX(-${index * 100}%)`,
              }}
            >
              {TESTIMONIALS.map((testimonial) => (
                <div className={styles.slide} key={testimonial.name}>
                  <img
                    src={testimonial.photo}
                    alt={`Foto de ${testimonial.name}`}
                    className={styles.photo}
                  />

                  <p className={styles.quote}>
                    “{testimonial.quote}”
                  </p>

                  <div className={styles.name}>
                    {testimonial.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.dots}>
            {TESTIMONIALS.map((testimonial, dotIndex) => (
              <button
                key={testimonial.name}
                type="button"
                className={`${styles.dot} ${
                  dotIndex === index ? styles.dotActive : ""
                }`}
                onClick={() => setIndex(dotIndex)}
                aria-label={`Ver depoimento ${dotIndex + 1}`}
                aria-current={dotIndex === index}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Testimonials;
