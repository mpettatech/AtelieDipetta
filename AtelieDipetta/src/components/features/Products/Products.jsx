import React from "react";
import styles from "./Products.module.css";
import Container from "../../ui/Container";
import Section from "../../ui/Section";
import Title from "../../ui/Title";
import Card from "../../ui/Card";
import useOnScreen from "../../../hooks/useOnScreen";

const PRODUCTS = [
  {
    image: "/images/products/produto-1.jpg",
    title: "Nome do produto",
    price: "R$ 129,90",
    body: "Descrição curta e direta destacando o principal benefício do produto.",
    href: "/produtos/produto-1",
    badge: "Novo", // opcional
  },
  {
    image: "/images/products/produto-2.jpg",
    title: "Nome do produto",
    price: "R$ 89,90",
    body: "Descrição curta e direta destacando o principal benefício do produto.",
    href: "/produtos/produto-2",
  },
  // ...restante dos produtos
];

function ProductCard({ image, title, price, body, href, badge }) {
  const [ref, isVisible] = useOnScreen({ threshold: 0.15 });
  return (
    <div ref={ref} data-reveal className={isVisible ? "is-visible" : ""}>
      <Card hoverable elevation={1}>
        <a href={href} className={styles.productLink}>
          <div className={styles.imageWrap}>
            <img src={image} alt={title} className={styles.productImage} loading="lazy" />
            {badge && <span className={styles.badge}>{badge}</span>}
          </div>
          <Card.Body>
            <h3 className={styles.productTitle}>{title}</h3>
            <p className={styles.productBody}>{body}</p>
            <span className={styles.price}>{price}</span>
          </Card.Body>
        </a>
      </Card>
    </div>
  );
}

export default function Products() {
  return (
    <Section>
      <Container>
        <Title>Nossos produtos</Title>
        <div className={styles.grid}>
          {PRODUCTS.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

