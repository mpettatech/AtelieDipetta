import React from "react";
import styles from "./Products.module.css";
import Container from "../../ui/Container";
import Section from "../../ui/Section";
import Title from "../../ui/Title";
import Card from "../../ui/Card";
import useOnScreen from "../../../hooks/useOnScreen";

// Importa todas as imagens da pasta de uma vez, com URL já resolvida
const productImages = import.meta.glob("../../Produtos/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

// Helper: pega a imagem pelo nome do arquivo (sem precisar saber o caminho completo)
function getImage(filename) {
  const match = Object.entries(productImages).find(([path]) =>
    path.endsWith(`/${filename}`)
  );
  return match ? match[1] : null;
}


const PRODUCTS = [
 {
    image: getImage("brincoArgola.jpg"),
    title: "Brinco Argola",
    price: "R$ 129,90",
    body: "Descrição curta e direta destacando o principal benefício do produto.",
    href: "#contact",
    badge: "Novo",
  },
  {
    image: getImage("colar-prata.jpg"),
    title: "Colar Prata",
    price: "R$ 89,90",
    body: "Descrição curta e direta destacando o principal benefício do produto.",
    href: "#contact",
  }
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

