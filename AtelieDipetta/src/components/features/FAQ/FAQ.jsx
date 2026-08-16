import { useState } from "react";
import styles from "./FAQ.module.css";
import Container from "../../ui/Container";
import Section from "../../ui/Section";
import Title from "../../ui/Title";
import { FAQ_ITEMS } from "../../../utils/constants";

/**
 * FAQ — accessible accordion of frequently asked questions. Only one
 * item is open at a time; height animates via a CSS grid-rows trick so
 * no fixed pixel height is needed.
 *
 * @example
 * <FAQ />
 */
function FAQ() {
  const [openId, setOpenId] = useState(FAQ_ITEMS[0]?.id ?? null);

  const toggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <Section id="faq" padding="lg" background="elevated" bordered>
      <Container size="lg">
        <div className={styles.header}>
          <Title align="center" eyebrow="Questions">
            Frequently asked questions
          </Title>
        </div>

        <div className={styles.list}>
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div className={styles.item} key={item.id}>
                <button
                  type="button"
                  className={styles.trigger}
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`${item.id}-panel`}
                >
                  {item.question}
                  <span
                    className={[styles.icon, isOpen ? styles.iconOpen : ""]
                      .filter(Boolean)
                      .join(" ")}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div
                  id={`${item.id}-panel`}
                  className={[styles.panel, isOpen ? styles.panelOpen : ""]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <div className={styles.panelInner}>
                    <p className={styles.answer}>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

export default FAQ;
