"use client";

import { motion } from "framer-motion";
import { COPY, PROBLEM_POINTS } from "@/lib/constants";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Card } from "@/components/shared/Card";

export function ProblemSection() {
  return (
    <SectionWrapper id="problem" className="bg-background">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          className="lg:pt-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {COPY.problem.headline}
          </h2>
          <p className="mt-4 text-lg text-muted">
            After hours, on busy days, or when you&apos;re flat out — enquiries
            slip through. Those are customers who never come back.
          </p>
        </motion.div>
        <div className="space-y-6">
          {PROBLEM_POINTS.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card>
                <h3 className="text-lg font-semibold text-foreground">
                  {point.title}
                </h3>
                <p className="mt-2 text-muted">{point.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
