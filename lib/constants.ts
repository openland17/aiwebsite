export const SITE = {
  name: "Zephyr Systems",
} as const;

export const NAV_LINKS = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Results", href: "#results" },
  { label: "Who it's for", href: "#who-its-for" },
  { label: "Pricing", href: "#pricing" },
] as const;

export const COPY = {
  hero: {
    headline: "Your Business, Working While You Sleep",
    subheading:
      "We build AI assistants that handle bookings, capture orders and answer customer questions — automatically, 24/7.",
  },
  problem: {
    headline: "Every missed enquiry is revenue you'll never see",
  },
  solution: {
    headline: "An AI assistant that does the work for you",
  },
  pricing: {
    headline: "Simple pricing. No surprises.",
    price: "$200/month — everything included",
  },
  finalCta: {
    headline: "Ready to stop losing orders after hours?",
    subtext:
      "Book a free 20-minute demo. We'll show you exactly what it looks like for your business.",
  },
  footer: {
    tagline:
      "Based in Brisbane. Working with local businesses across QLD.",
  },
} as const;

export const CONTACT = {
  email: "mattsmith.info@gmail.com",
  phone: "+61 407 733 940",
  linkedin: "https://linkedin.com/in/mattsmithtech",
  website: "https://mjsmith.tech",
} as const;

export const SOCIAL_PROOF_TAGS = [
  "Hospitality",
  "Cafes & Restaurants",
  "Local retail",
  "Salons & clinics",
  "Brisbane & QLD",
] as const;

export const PROBLEM_POINTS = [
  {
    title: "Missed after-hours enquiries",
    description:
      "Customers expect to reach you when it suits them. Every unanswered message or call is a lost booking or sale.",
  },
  {
    title: "Repetitive questions drain time",
    description:
      "Hours spent answering the same questions about opening times, menus, bookings and availability — time that could go into running your business.",
  },
  {
    title: "No single place for orders & bookings",
    description:
      "Scattered across phone, socials and email. Easy to miss, hard to track, and impossible to scale.",
  },
] as const;

export const SOLUTION_FEATURES = [
  {
    title: "Bookings & reservations",
    description:
      "Your AI assistant takes bookings 24/7, checks availability and confirms — so you never miss a reservation.",
  },
  {
    title: "Orders & enquiries",
    description:
      "Captures orders, answers FAQs about menus and services, and hands off to you when it's time to close the deal.",
  },
  {
    title: "One inbox, one dashboard",
    description:
      "Everything flows into one place. See conversations, bookings and orders at a glance and follow up when it matters.",
  },
] as const;

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: "Tell us about your business",
    description:
      "We learn your services, opening hours, menu or offerings and how you like to communicate.",
  },
  {
    step: 2,
    title: "We design your assistant",
    description:
      "We build a custom AI that speaks in your voice and handles the conversations that matter most.",
  },
  {
    step: 3,
    title: "Connect your channels",
    description:
      "Your assistant works on your website, phone, or messaging — wherever your customers already are.",
  },
  {
    step: 4,
    title: "Go live and optimise",
    description:
      "We launch, monitor and tune so you get more bookings and orders with less manual work.",
  },
] as const;

export const RESULTS_STATS = [
  { value: "24/7", label: "Availability" },
  { value: "80%+", label: "Enquiries answered instantly" },
  { value: "Hours", label: "Saved every week" },
] as const;

export const WHO_ITS_FOR_INDUSTRIES = [
  { name: "Cafes & restaurants", icon: "☕" },
  { name: "Salons & barbers", icon: "✂️" },
  { name: "Clinics & health", icon: "🏥" },
  { name: "Gyms & studios", icon: "💪" },
  { name: "Retail & local shops", icon: "🛍️" },
  { name: "Trades & services", icon: "🔧" },
] as const;
