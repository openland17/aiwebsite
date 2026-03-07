import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { Industries } from "@/components/sections/Industries";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { Results } from "@/components/sections/Results";
import { Pricing } from "@/components/sections/Pricing";
import { BookCall } from "@/components/sections/BookCall";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <WhatWeDo />
        <Industries />
        <HowWeWork />
        <Results />
        <Pricing />
        <BookCall />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
