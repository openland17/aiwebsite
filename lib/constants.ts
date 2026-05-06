export const SITE = {
  name: "MJS Consulting",
  url: "https://mjs-consulting.com.au",
} as const;

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Engagements", href: "#engagements" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const CONTACT = {
  principal: "Matt Smith",
  role: "Principal",
  email: "matt@mjs-consulting.com.au",
  phone: "0407 733 940",
  phoneIntl: "+61407733940",
  location: "Brisbane, QLD",
} as const;

export const BUSINESS = {
  legalName: "MJS Consulting",
  abn: "50 760 617 665",
} as const;
