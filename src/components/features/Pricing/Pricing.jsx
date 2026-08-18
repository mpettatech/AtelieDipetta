import React from "react";
import styles from "./Pricing.module.css";
import Container from "../../ui/Container";
import Section from "../../ui/Section";
import Title from "../../ui/Title";
import Card from "../../ui/Card";
import Badge from "../../ui/Badge";
import Button from "../../ui/Button";
import { PRICING_TIERS } from "../../../utils/constants";
import { scrollToId } from "../../../utils/helpers";

/**
 * Pricing — three-tier pricing grid with the recommended plan highlighted.
 *
 * @example
 * <Pricing />
 */
function Pricing() {
  return (
    <Section id="pricing" padding="lg" background="elevated" bordered>
      <Container size="xl">
        <div className={styles.header}>
          <Title
            align="center"
            eyebrow="Pricing"
            subtitle="Start free. Upgrade when the whole team depends on it."
          >
            Simple pricing, per seat
          </Title>
        </div>

        <div className={styles.grid}>
          {PRICING_TIERS.map((tier) => (
            <Card
              key={tier.id}
              hoverable
              elevation={tier.highlighted ? 3 : 1}
              className={[
                styles.tierCard,
                tier.highlighted ? styles.highlighted : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {tier.highlighted && (
                <span className={styles.popularBadge}>
                  <Badge variant="accent">Most popular</Badge>
                </span>
              )}
              <Card.Body>
                <h3 className={styles.tierName}>{tier.name}</h3>
                <div className={styles.priceRow}>
                  <span className={styles.price}>{tier.price}</span>
                  <span className={styles.period}>{tier.period}</span>
                </div>
                <p className={styles.tierDescription}>{tier.description}</p>

                <ul className={styles.featureList}>
                  {tier.features.map((feature) => (
                    <li key={feature} className={styles.featureItem}>
                      <span className={styles.checkIcon} aria-hidden="true">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card.Body>
              <Card.Footer>
                <Button
                  fullWidth
                  variant={tier.highlighted ? "primary" : "outline"}
                  onClick={() => scrollToId("contact")}
                >
                  {tier.cta}
                </Button>
              </Card.Footer>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Pricing;
