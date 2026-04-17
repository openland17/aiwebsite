import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Problem } from "@/components/sections/Problem";
import { CustomSolutions } from "@/components/sections/CustomSolutions";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Engagement } from "@/components/sections/Engagement";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Problem />
        <CustomSolutions />
        <CaseStudies />
        <Engagement />
        <HowWeWork />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
