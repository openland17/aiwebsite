import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { OpenClaw } from "@/components/sections/OpenClaw";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CaseStudies />
        <HowWeWork />
        <OpenClaw />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
