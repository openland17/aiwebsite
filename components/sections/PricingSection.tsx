"use client";

import { motion } from "framer-motion";
import { COPY } from "@/lib/constants";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { CTAButton } from "@/components/shared/CTAButton";
import { Card } from "@/components/shared/Card";

export function PricingSection() {
  return (
    <SectionWrapper id="pricing" className="bg-section-light text-background">
      <motion.h2
        className="text-center text-3xl font-bold tracking-tight sm:text-4xl"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {COPY.pricing.headline}
      </motion.h2>
      <motion.div
        className="mx-auto mt-12 max-w-md"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="border-slate-200/60 bg-white text-center">
          <p className="text-muted">
            Tailored to your business. Book a call to get a quote.
          </p>
          <div className="mt-8">
            <CTAButton href="#contact" variant="primary" size="large">
              Book a free demo
            </CTAButton>
          </div>
        </Card>
      </motion.div>
    </SectionWrapper>
  );
}
