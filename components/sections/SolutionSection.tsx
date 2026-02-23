"use client";

import { motion } from "framer-motion";
import { COPY, SOLUTION_FEATURES } from "@/lib/constants";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Card } from "@/components/shared/Card";

export function SolutionSection() {
  return (
    <SectionWrapper
      id="solution"
      className="bg-section-light text-background"
    >
      <motion.h2
        className="text-center text-3xl font-bold tracking-tight sm:text-4xl"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {COPY.solution.headline}
      </motion.h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted">
        One assistant. Your brand. Your rules. Available whenever your
        customers need you.
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SOLUTION_FEATURES.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Card
              className="h-full border-slate-200/60 bg-white text-background"
              bordered
            >
              <h3 className="text-lg font-semibold text-background">
                {feature.title}
              </h3>
              <p className="mt-2 text-muted">{feature.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
