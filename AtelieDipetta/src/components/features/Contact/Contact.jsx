import { useContext, useId, useState } from "react";
import styles from "./Contact.module.css";
import Container from "../../ui/Container";
import Section from "../../ui/Section";
import Title from "../../ui/Title";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { AppContext } from "../../../context/AppContext";
import { isValidEmail } from "../../../utils/helpers";

const INITIAL_VALUES = { name: "", email: "", company: "", message: "" };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Enter your name";
  if (!isValidEmail(values.email)) errors.email = "Enter a valid email";
  if (values.message.trim().length < 10)
    errors.message = "Tell us a little more (10+ characters)";
  return errors;
}

/**
 * Contact — validated contact form with inline field errors, a loading
 * state on submit, and success feedback via both a toast and an inline
 * banner.
 *
 * @example
 * <Contact />
 */
function Contact() {
  const { addToast } = useContext(AppContext);
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const messageId = useId();

  const handleChange = (field) => (event) => {
    setValues((current) => ({ ...current, [field]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setSubmitting(false);
    setSubmitted(true);
    setValues(INITIAL_VALUES);
    addToast({
      variant: "success",
      title: "Message sent",
      message: "We'll reply within one business day.",
    });
  };

  return (
    <Section id="contact" padding="lg">
      <Container size="lg">
        <div className={styles.grid}>
          <div className={styles.info}>
            <Title eyebrow="Get in touch" size="lg">
              Let's find your team's overlap
            </Title>
            <p className={styles.infoBody}>
              Tell us about your team's timezones and we'll show you exactly
              how Meridian would map your working hours — no generic demo,
              just your data.
            </p>
            <div className={styles.contactRow}>
              <span className={styles.contactLabel}>Email</span>
              <span className={styles.contactValue}>hello@meridian.app</span>
            </div>
            <div className={styles.contactRow}>
              <span className={styles.contactLabel}>Response time</span>
              <span className={styles.contactValue}>Under 1 business day</span>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            {submitted && (
              <div className={styles.successBanner} role="status">
                ✓ Thanks — your message is on its way to our team.
              </div>
            )}

            <div className={styles.row}>
              <Input
                label="Name"
                required
                value={values.name}
                onChange={handleChange("name")}
                error={errors.name}
              />
              <Input
                label="Work email"
                type="email"
                required
                value={values.email}
                onChange={handleChange("email")}
                error={errors.email}
              />
            </div>

            <Input
              label="Company"
              value={values.company}
              onChange={handleChange("company")}
              helperText="Optional"
            />

            <label className={styles.textareaLabel} htmlFor={messageId}>
              Message
              <textarea
                id={messageId}
                className={[
                  styles.textarea,
                  errors.message ? styles.textareaError : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                value={values.message}
                onChange={handleChange("message")}
                placeholder="What timezones does your team span?"
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message && (
                <span className={styles.errorText} role="alert">
                  {errors.message}
                </span>
              )}
            </label>

            <Button type="submit" size="lg" loading={submitting} fullWidth>
              Send message
            </Button>
          </form>
        </div>
      </Container>
    </Section>
  );
}

export default Contact;
