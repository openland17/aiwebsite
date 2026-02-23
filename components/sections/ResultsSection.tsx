"use client";

import { motion } from "framer-motion";
import { RESULTS_STATS } from "@/lib/constants";
import { SectionWrapper } from "@/components/shared/SectionWrapper";

export function ResultsSection() {
  return (
    <SectionWrapper id="results" className="bg-section-light text-background">
      <motion.h2
        className="text-center text-3xl font-bold tracking-tight sm:text-4xl"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Results that matter
      </motion.h2>
      <div className="mt-12 grid gap-8 sm:grid-cols-3">
        {RESULTS_STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="text-4xl font-bold text-accent sm:text-5xl">
              {stat.value}
            </div>
            <div className="mt-2 text-lg font-medium text-background">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
