export const SITE_NAME = "Meridian";

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
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
    question: "How does Meridian find overlapping hours?",
    answer:
      "Every teammate sets their working hours once. Meridian cross-references them live and highlights the windows where everyone is online, updating automatically for daylight saving shifts.",
  },
  {
    id: "faq-2",
    question: "Does it work with our existing calendar?",
    answer:
      "Yes. Meridian syncs one-way or two-way with Google Calendar and Outlook, so suggested meeting times can be booked without leaving your usual tools.",
  },
  {
    id: "faq-3",
    question: "Can I try it before paying?",
    answer:
      "The Team plan includes a 14-day free trial with no card required. The Starter plan is free indefinitely for small teams.",
  },
  {
    id: "faq-4",
    question: "What happens when someone travels?",
    answer:
      "Teammates can set a temporary timezone for travel. Meridian recalculates overlap for everyone else automatically and reverts once the trip ends.",
  },
];
