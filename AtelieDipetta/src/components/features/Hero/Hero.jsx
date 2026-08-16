import styles from "./Hero.module.css";
import Container from "../../ui/Container";
import Button from "../../ui/Button";
import Badge from "../../ui/Badge";
import { scrollToId } from "../../../utils/helpers";

/**
 * Converts a clock hour (0–24, UTC) to an [x, y] point on a circle.
 * 0:00 sits at the top; hours progress clockwise.
 */
function pointOnCircle(cx, cy, radius, hour) {
  const angle = (hour / 24) * 2 * Math.PI - Math.PI / 2;
  return [cx + radius * Math.cos(angle), cy + radius * Math.sin(angle)];
}

/** Builds an SVG arc path between two hours on a given ring. */
function arcPath(cx, cy, radius, startHour, endHour) {
  const [x1, y1] = pointOnCircle(cx, cy, radius, startHour);
  const [x2, y2] = pointOnCircle(cx, cy, radius, endHour);
  const largeArc = endHour - startHour > 12 ? 1 : 0;
  return `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`;
}

const RINGS = [
  { city: "San Francisco", start: 17, end: 24, radius: 150, color: "var(--color-secondary)" },
  { city: "New York", start: 14, end: 22, radius: 128, color: "var(--color-accent)" },
  { city: "London", start: 9, end: 17, radius: 106, color: "var(--color-success)" },
  { city: "Berlin", start: 8, end: 16, radius: 84, color: "var(--color-secondary-strong)" },
];

const OVERLAP = { start: 14, end: 15 }; // shown on the outer ring as the shared golden window

/**
 * Hero — opening section of the page: headline, supporting copy, primary
 * CTAs, and a ring diagram (the page's signature element) showing four
 * cities' working hours converging into one overlap window.
 *
 * @example
 * <Hero />
 */
function Hero() {
  const cx = 190;
  const cy = 190;

  return (
    <section id="top" className={styles.hero}>
      <Container size="xl">
        <div className={styles.grid}>
          <div className={styles.content}>
            <Badge variant="accent">Now syncing 40,000+ working hours a day</Badge>
            <h1 className={styles.headline}>
              One shared clock for teams spread <em>across every timezone</em>
            </h1>
            <p className={styles.body}>
              Meridian finds the exact hours your whole team can meet, converts
              them into everyone's local time automatically, and keeps
              adjusting as people travel or daylight saving shifts.
            </p>
            <div className={styles.ctaRow}>
              <Button size="lg" onClick={() => scrollToId("contact")}>
                Book a demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToId("features")}
              >
                See how it works
              </Button>
            </div>
            <span className={styles.microcopy}>
              No credit card required · 14-day free trial
            </span>
          </div>

          <div className={styles.arcWrap}>
            <svg
              viewBox="0 0 380 380"
              width="380"
              height="380"
              role="img"
              aria-label="Diagram showing four cities' working hours overlapping into one shared meeting window"
            >
              <defs>
                <linearGradient id="meridianGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--color-accent)" />
                  <stop offset="100%" stopColor="var(--color-secondary)" />
                </linearGradient>
              </defs>

              {RINGS.map((ring) => (
                <g key={ring.city}>
                  <circle
                    cx={cx}
                    cy={cy}
                    r={ring.radius}
                    className={styles.arcTrack}
                  />
                  <path
                    d={arcPath(cx, cy, ring.radius, ring.start, ring.end)}
                    stroke={ring.color}
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.85"
                  />
                </g>
              ))}

              {/* Highlighted overlap window on the outermost ring */}
              <path
                d={arcPath(cx, cy, RINGS[0].radius, OVERLAP.start, OVERLAP.end)}
                className={styles.arcFill}
                style={{ "--arc-length": 40 }}
              />
              {(() => {
                const [dotX, dotY] = pointOnCircle(
                  cx,
                  cy,
                  RINGS[0].radius,
                  (OVERLAP.start + OVERLAP.end) / 2
                );
                return <circle cx={dotX} cy={dotY} r="6" className={styles.overlapDot} />;
              })()}

              <text x={cx} y={cy - 6} textAnchor="middle" className={styles.cityLabel} style={{ fontSize: 13 }}>
                14:00–15:00 UTC
              </text>
              <text x={cx} y={cy + 14} textAnchor="middle" className={styles.cityTime}>
                everyone's overlap
              </text>
            </svg>
            <span className={styles.arcCaption}>
              SF · New York · London · Berlin
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
