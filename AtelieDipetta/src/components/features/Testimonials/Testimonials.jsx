import { useEffect, useState } from "react";
import styles from "./Testimonials.module.css";
import Container from "../../ui/Container";
import Section from "../../ui/Section";
import Title from "../../ui/Title";

const TESTIMONIALS = [
  {
    quote:
      "We went from a shared spreadsheet nobody trusted to a single view everyone checks before booking anything. Onboarding took an afternoon.",
    name: "Priya Nair",
    role: "Engineering Manager, Latchkey",
  },
  {
    quote:
      "Meridian is the first tool that actually understands our team isn't just US and Europe — it handles Singapore and São Paulo just as well.",
    name: "Diego Ferreira",
    role: "Head of Remote Ops, Fenwick",
  },
  {
    quote:
      "The fair-rotation suggestion alone fixed a year of the same three people staying up late for standup.",
    name: "Amara Osei",
    role: "VP Engineering, Northlight",
  },
];

/**
 * Testimonials — auto-advancing quote carousel with manual arrow and
 * dot navigation.
 *
 * @example
 * <Testimonials />
 */
function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const goTo = (nextIndex) => {
    setIndex((nextIndex + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <Section id="testimonials" padding="lg">
      <Container size="md">
        <div className={styles.header}>
          <Title align="center" eyebrow="From the teams using it">
            Trusted by distributed teams
          </Title>
        </div>

        <div className={styles.carousel}>
          <div className={styles.track}>
            <div
              className={styles.slides}
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {TESTIMONIALS.map((testimonial) => (
                <div className={styles.slide} key={testimonial.name}>
                  <p className={styles.quote}>{testimonial.quote}</p>
                  <div className={styles.attribution}>
                    <span className={styles.avatar} aria-hidden="true">
                      {testimonial.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </span>
                    <div>
                      <div className={styles.name}>{testimonial.name}</div>
                      <div className={styles.role}>{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.controls}>
            <button
              type="button"
              className={styles.navButton}
              onClick={() => goTo(index - 1)}
              aria-label="Previous testimonial"
            >
              ‹
            </button>
            <div className={styles.dots}>
              {TESTIMONIALS.map((testimonial, dotIndex) => (
                <button
                  key={testimonial.name}
                  type="button"
                  className={[
                    styles.dot,
                    dotIndex === index ? styles.dotActive : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => goTo(dotIndex)}
                  aria-label={`Go to testimonial ${dotIndex + 1}`}
                  aria-current={dotIndex === index}
                />
              ))}
            </div>
            <button
              type="button"
              className={styles.navButton}
              onClick={() => goTo(index + 1)}
              aria-label="Next testimonial"
            >
              ›
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Testimonials;
