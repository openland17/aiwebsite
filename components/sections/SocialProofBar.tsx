"use client";

import { motion } from "framer-motion";
import { SOCIAL_PROOF_TAGS } from "@/lib/constants";

export function SocialProofBar() {
  return (
    <section className="border-y border-border-subtle bg-background py-4">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-3 text-center text-xs uppercase tracking-wider text-muted">
          Trusted by local businesses across Brisbane & QLD
        </p>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-muted"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          {SOCIAL_PROOF_TAGS.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
