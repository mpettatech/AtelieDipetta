import { useEffect, useState } from "react";
import styles from "./Stats.module.css";
import Container from "../../ui/Container";
import Section from "../../ui/Section";
import useOnScreen from "../../../hooks/useOnScreen";
import { formatNumber, clamp } from "../../../utils/helpers";

const STATS = [
  { value: 1200, suffix: "+", label: "teams coordinating on Meridian" },
  { value: 40000, suffix: "+", label: "working hours matched daily" },
  { value: 38, suffix: "", label: "countries represented" },
  { value: 92, suffix: "%", label: "reduction in scheduling back-and-forth" },
];

/**
 * useCountUp — animates a number from 0 to `target` over `duration` ms,
 * starting only once `start` becomes true.
 */
function useCountUp(target, start, duration = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return undefined;
    let frame;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = clamp((now - startTime) / duration, 0, 1);
      setValue(Math.round(target * progress));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, target, duration]);

  return value;
}

function Stat({ value, suffix, label }) {
  const [ref, isVisible] = useOnScreen({ threshold: 0.5 });
  const count = useCountUp(value, isVisible);

  return (
    <div ref={ref}>
      <div className={styles.number}>
        {formatNumber(count)}
        {suffix}
      </div>
      <p className={styles.label}>{label}</p>
    </div>
  );
}

/**
 * Stats — row of animated counters that count up when scrolled into view.
 *
 * @example
 * <Stats />
 */
function Stats() {
  return (
    <Section padding="md">
      <Container size="xl">
        <div className={styles.grid}>
          {STATS.map((stat) => (
            <Stat key={stat.label} {...stat} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Stats;
