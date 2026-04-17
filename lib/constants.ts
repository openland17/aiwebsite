export const SITE = {
  name: "MJS Consulting",
} as const;

export const NAV_LINKS = [
  { label: "Work", href: "#case-studies" },
  { label: "Process", href: "#how-we-work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

// TODO: replace this with a dedicated "Free Operations Audit" event type
// once the Calendly event is created.
export const AUDIT_URL = "https://calendly.com/mjs-consulting/ai-demo";

export const CONTACT = {
  email: "mattsmith.info@gmail.com",
  phone: "+61 407 733 940",
} as const;
