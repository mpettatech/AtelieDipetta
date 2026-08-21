export const SITE_NAME = "Ateliê Di Petta";

export const NAV_LINKS = [
  { label: "Produtos", href: "#features" },
  { label: "Parceirias", href: "#pricing" },
  { label: "Feedbacks", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contact" },
];

export const SOCIAL_LINKS = [
  { label: "X", href: "https://x.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

export const BREAKPOINTS = {
  sm: "(max-width: 640px)",
  md: "(max-width: 768px)",
  lg: "(max-width: 1024px)",
};

export const PRICING_TIERS = [
  {
    id: "starter",
    name: "Starter",
    price: "$0",
    period: "forever",
    description: "For small teams finding their first overlap window.",
    features: [
      "Up to 5 teammates",
      "3 tracked timezones",
      "Shared availability grid",
      "Community support",
    ],
    highlighted: false,
    cta: "Start for free",
  },
  {
    id: "team",
    name: "Team",
    price: "$12",
    period: "per seat / month",
    description: "For distributed teams who meet across time zones daily.",
    features: [
      "Unlimited teammates",
      "Unlimited timezones",
      "Meeting-time suggestions",
      "Calendar sync",
      "Priority support",
    ],
    highlighted: true,
    cta: "Start free trial",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    period: "billed annually",
    description: "For organizations coordinating hundreds of contributors.",
    features: [
      "Everything in Team",
      "SSO & SCIM",
      "Audit logs",
      "Dedicated success manager",
      "Custom SLAs",
    ],
    highlighted: false,
    cta: "Talk to sales",
  },
];

export const FAQ_ITEMS = [
  {
    id: "faq-1",
    question: "Que tipo de material Ateliê Di Petta utiliza para criar seus produtos?",
    answer:
      "Usamos materiais de alta qualidade 100% algodão, sendo antialérgicos e hipoalergênicos, garantindo conforto e segurança para todos os nossos clientes.",
  },
  {
    id: "faq-2",
    question: "Posso efetuar a compra pelo Site?",
    answer:
      "Atualmente não é possível realizar compras diretamente pelo site. Para adquirir nossos produtos, entre em contato conosco através do WhatsApp ou Instagram, atente-se aos contatos oficiais, presentes no site.",
  },
  {
    id: "faq-3",
    question: "Os produtos são a pronta entrega ou sob encomenda?",
    answer: "Temos alguns produtos a pronta entrega, sujeito a consultar o estoque. Alguns produtos somente sob encomenda"
  },
  {
    id: "faq-4",
    question: "Existe loja física? Faz entregas em todo o Brasil?",
    answer:
      "Não possuímos loja física no momento, mas entregamos em todo o Brasil. Acompanhe nosso instagram para ficar por dentro quando houver um evento com nossa presença",
  },
];
