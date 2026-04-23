import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support",
  description:
    "ToolKeep Support — contact us for questions, feedback, or bug reports.",
};

const h1 =
  "text-[42px] font-extrabold leading-[1.1] tracking-[-0.02em] mt-8 mb-6";
const h2 = "text-[22px] font-bold tracking-[-0.01em] mt-10 mb-3";
const p = "text-white/60 mb-4";
const aCls =
  "text-[#F59E0B] border-b border-[#F59E0B]/30 transition-colors hover:border-[#F59E0B]";

const FAQS = [
  {
    q: "Does ToolKeep work offline?",
    a: "Yes. Every feature — scanning, notifications, coverage check, PDFs — runs entirely on your device. No internet required after install.",
  },
  {
    q: "Can I move my tools to a new iPhone?",
    a: "Settings → Data → Export All Data creates a JSON backup you can email to yourself or save to Files, then Import Data on the new device.",
  },
  {
    q: "Why doesn't the coverage check use AI?",
    a: "Warranty rules are too important to hallucinate. ToolKeep uses a deterministic rule-based check that references your specific brand's published warranty terms, not a language model's guess.",
  },
  {
    q: "Is ToolKeep affiliated with Milwaukee / Makita / DeWalt / etc?",
    a: "No. ToolKeep is independent and not endorsed by any tool manufacturer. Brand names are used under nominative fair use for categorisation.",
  },
  {
    q: "I'm outside Brisbane. Why are there no service centres near me?",
    a: "v1 ships with a curated list of Brisbane-area dealers. More cities are coming in future updates. Email us if you'd like us to prioritise yours.",
  },
];

export default function SupportPage() {
  return (
    <article>
      <h1 className={h1}>Support</h1>
      <p className={p}>
        Questions, feedback, or bug reports? Drop us an email and we&apos;ll
        get back to you within a couple of business days.
      </p>

      <a
        href="mailto:support@mjsconsulting.com.au?subject=ToolKeep%20Support"
        className="my-6 inline-flex items-center gap-2.5 rounded-[14px] bg-[#F59E0B] px-7 py-4 text-base font-semibold text-[#0A0A0B] transition-colors hover:bg-[#FBBF24] active:translate-y-px"
      >
        <span aria-hidden>✉️</span>
        Email Support
      </a>

      <h2 className={h2}>Common questions</h2>

      <div className="space-y-3">
        {FAQS.map((item) => (
          <div
            key={item.q}
            className="rounded-[14px] bg-[#1C1C1E] px-6 py-5"
          >
            <h3 className="mb-2 text-[17px] font-semibold">{item.q}</h3>
            <p className="text-[15px] text-white/60">{item.a}</p>
          </div>
        ))}
      </div>

      <h2 className={h2}>Other ways to reach us</h2>
      <p className={p}>
        Visit{" "}
        <a className={aCls} href="https://mjsconsulting.com.au">
          mjsconsulting.com.au
        </a>{" "}
        for more about MJS Consulting.
      </p>
    </article>
  );
}
