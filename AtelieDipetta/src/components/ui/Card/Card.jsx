import PropTypes from "prop-types";
import styles from "./Card.module.css";

/**
 * Card — flexible content container with optional header/footer slots.
 *
 * @example
 * <Card hoverable elevation={2}>
 *   <Card.Header><Title as="h3">Team plan</Title></Card.Header>
 *   <Card.Body>Everything distributed teams need to stay in sync.</Card.Body>
 *   <Card.Footer><Button fullWidth>Choose plan</Button></Card.Footer>
 * </Card>
 */
function Card({
  children,
  hoverable = false,
  elevation = 1,
  divided = false,
  className = "",
  ...rest
}) {
  const classNames = [
    styles.card,
    styles[`elevation-${elevation}`],
    hoverable ? styles.hoverable : "",
    divided ? styles.divided : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
}

function CardHeader({ children, className = "" }) {
  return (
    <div className={[styles.header, className].filter(Boolean).join(" ")}>
      {children}
    </div>
  );
}

function CardBody({ children, className = "" }) {
  return (
    <div className={[styles.body, className].filter(Boolean).join(" ")}>
      {children}
    </div>
  );
}

function CardFooter({ children, className = "" }) {
  return (
    <div className={[styles.footer, className].filter(Boolean).join(" ")}>
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  /** Lifts and highlights the card on hover */
  hoverable: PropTypes.bool,
  /** Shadow depth, 0 (flat) to 3 (highest) */
  elevation: PropTypes.oneOf([0, 1, 2, 3]),
  /** Adds separating rules between header/body/footer */
  divided: PropTypes.bool,
  className: PropTypes.string,
};

CardHeader.propTypes = { children: PropTypes.node.isRequired, className: PropTypes.string };
CardBody.propTypes = { children: PropTypes.node.isRequired, className: PropTypes.string };
CardFooter.propTypes = { children: PropTypes.node.isRequired, className: PropTypes.string };

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
