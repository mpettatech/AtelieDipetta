import styles from "./Features.module.css";
import Container from "../../ui/Container";
import Section from "../../ui/Section";
import Title from "../../ui/Title";
import Card from "../../ui/Card";
import useOnScreen from "../../../hooks/useOnScreen";

const FEATURES = [
  {
    icon: "◐",
    title: "Live overlap detection",
    body: "See the exact hours everyone on the team is online, recalculated automatically as people join, travel, or shift schedules.",
  },
  {
    icon: "⇄",
    title: "Two-way calendar sync",
    body: "Connects to Google Calendar and Outlook so suggested meeting times can be booked without switching tools.",
  },
  {
    icon: "☀",
    title: "Daylight saving aware",
    body: "Meridian tracks every region's DST rules, so a meeting that works in March still works after the clocks change.",
  },
  {
    icon: "✈",
    title: "Travel-friendly",
    body: "Set a temporary timezone for a trip and Meridian quietly recalculates overlap for the rest of the team.",
  },
  {
    icon: "◔",
    title: "Fair rotation",
    body: "When there's no perfect overlap, Meridian suggests a rotating meeting time so the same region isn't always up at 6am.",
  },
  {
    icon: "▤",
    title: "Team-wide visibility",
    body: "A single shared view of working hours, holidays, and focus time — no more asking 'what time is it for you?'",
  },
];

function FeatureCard({ icon, title, body }) {
  const [ref, isVisible] = useOnScreen({ threshold: 0.15 });

  return (
    <div ref={ref} data-reveal className={isVisible ? "is-visible" : ""}>
      <Card hoverable elevation={1}>
        <Card.Body>
          <span className={styles.iconWrap} aria-hidden="true">
            {icon}
          </span>
          <h3 className={styles.featureTitle}>{title}</h3>
          <p className={styles.featureBody}>{body}</p>
        </Card.Body>
      </Card>
    </div>
  );
}

/**
 * Features — grid of product capability cards with on-scroll reveal.
 *
 * @example
 * <Features />
 */
function Features() {
  return (
    <Section id="features" padding="lg">
      <Container size="xl">
        <div className={styles.header}>
          <Title
            eyebrow="Why teams switch"
            subtitle="Everything you need to schedule across timezones without the spreadsheet."
          >
            Built for teams that never share an office
          </Title>
        </div>
        <div className={styles.grid}>
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Features;
