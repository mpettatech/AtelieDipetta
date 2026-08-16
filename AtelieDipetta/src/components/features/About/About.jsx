import React from "react";
import styles from "./About.module.css";
import Container from "../../ui/Container";
import Section from "../../ui/Section";
import Title from "../../ui/Title";

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
            <Title eyebrow="Our story" size="lg">
              Built by a team that was tired of "does 9am work for you?"
            </Title>
            <p className={styles.body}>
              Meridian started in 2022 inside a four-person team spread across
              San Francisco, Berlin, and Singapore. Every planning conversation
              began with someone converting timezones by hand — and someone
              always got the 11pm call.
            </p>
            <p className={styles.body}>
              Today Meridian coordinates working hours for distributed teams
              at companies of every size, from five-person startups to
              enterprise engineering orgs spanning a dozen countries.
            </p>

            <div className={styles.statRow}>
              <div>
                <div className={styles.statNumber}>1,200+</div>
                <div className={styles.statLabel}>teams onboarded</div>
              </div>
              <div>
                <div className={styles.statNumber}>38</div>
                <div className={styles.statLabel}>countries represented</div>
              </div>
              <div>
                <div className={styles.statNumber}>4.9/5</div>
                <div className={styles.statLabel}>average team rating</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default About;
