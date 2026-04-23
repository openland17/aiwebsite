import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "ToolKeep Terms of Use — informational warranty tracking. Not legal advice. Not affiliated with any tool brand.",
};

const h1 =
  "text-[42px] font-extrabold leading-[1.1] tracking-[-0.02em] mb-2 mt-8";
const effective = "text-white/40 text-[15px] mb-8 mt-0";
const h2 = "text-[22px] font-bold tracking-[-0.01em] mt-10 mb-3";
const p = "text-white/60 mb-4";

export default function TermsPage() {
  return (
    <article>
      <h1 className={h1}>Terms of Use</h1>
      <p className={effective}>Effective date: April 2026</p>

      <h2 className={h2}>Informational use only</h2>
      <p className={p}>
        ToolKeep provides informational warranty tracking. It is not legal or
        warranty advice. Information presented about manufacturer warranties is
        general and may not reflect the exact terms that apply to your
        purchase. Always refer to the warranty document provided by the
        manufacturer for definitive terms.
      </p>

      <h2 className={h2}>Not affiliated with any brand</h2>
      <p className={p}>
        ToolKeep is not affiliated with, endorsed by, or sponsored by
        Milwaukee, Makita, DeWalt, Bosch, Stihl, Husqvarna, or any other brand
        mentioned in the app. All trade marks are the property of their
        respective owners. Brand names are used for informational
        categorisation only under nominative fair use.
      </p>

      <h2 className={h2}>Australian Consumer Law</h2>
      <p className={p}>
        Nothing in these terms excludes, restricts, or modifies any consumer
        right or guarantee provided by the Australian Consumer Law.
      </p>

      <h2 className={h2}>As-is, no warranty</h2>
      <p className={p}>
        ToolKeep is provided free of charge on an &ldquo;as is&rdquo; basis
        without warranty of any kind, express or implied. The developer makes
        no guarantee that the app will be error-free, uninterrupted, or meet
        your specific needs.
      </p>

      <h2 className={h2}>Limitation of liability</h2>
      <p className={p}>
        To the maximum extent permitted by Australian law, the developer is
        not liable for any loss, damage, or claim arising from your use of
        ToolKeep, including any decision you make based on information
        displayed in the app.
      </p>

      <h2 className={h2}>Governing law</h2>
      <p className={p}>
        These terms are governed by the laws of Queensland, Australia.
      </p>

      <h2 className={h2}>Changes</h2>
      <p className={p}>
        These terms may be updated from time to time. Continued use after an
        update constitutes acceptance.
      </p>
    </article>
  );
}
