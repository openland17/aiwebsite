import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { OpenClaw } from "@/components/sections/OpenClaw";
import { CustomSolutions } from "@/components/sections/CustomSolutions";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <OpenClaw />
        <CustomSolutions />
        <CaseStudies />
        <HowWeWork />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
