import React, { useState } from "react";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import Input from "../components/ui/Input";
import Modal from "../components/ui/Modal";
import Tooltip from "../components/ui/Tooltip";
import Spinner from "../components/ui/Spinner";

/**
 * ComponentsShowcase — a reference page demonstrating each UI primitive
 * in isolation. Useful during development and as living documentation;
 * not linked from the marketing site's navigation.
 *
 * @example
 * <ComponentsShowcase />
 */
function ComponentsShowcase() {
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <Section padding="lg">
      <Container size="lg">
        <Title eyebrow="Reference" subtitle="Every ui/ component, shown in isolation.">
          Component showcase
        </Title>

        <div style={{ display: "grid", gap: "2rem", marginTop: "2.5rem" }}>
          <Card>
            <Card.Header>
              <h3>Buttons</h3>
            </Card.Header>
            <Card.Body
              style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}
            >
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button loading>Loading</Button>
              <Button disabled>Disabled</Button>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header>
              <h3>Badges</h3>
            </Card.Header>
            <Card.Body
              style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}
            >
              <Badge variant="neutral">Neutral</Badge>
              <Badge variant="accent">Accent</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="danger">Danger</Badge>
              <Badge variant="accent" count={4} />
              <Badge dismissible>Dismissible</Badge>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header>
              <h3>Form controls</h3>
            </Card.Header>
            <Card.Body style={{ maxWidth: "24rem" }}>
              <Input
                label="Email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                helperText="We'll never share this."
              />
            </Card.Body>
          </Card>

          <Card>
            <Card.Header>
              <h3>Overlays</h3>
            </Card.Header>
            <Card.Body
              style={{ display: "flex", gap: "1rem", alignItems: "center" }}
            >
              <Button onClick={() => setModalOpen(true)}>Open modal</Button>
              <Tooltip content="Positioned above the trigger">
                <Button variant="outline">Hover me</Button>
              </Tooltip>
              <Spinner />
            </Card.Body>
          </Card>
        </div>

        <Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          title="Example modal"
        >
          <p>Closes on Escape, backdrop click, or the × button.</p>
        </Modal>
      </Container>
    </Section>
  );
}

export default ComponentsShowcase;
