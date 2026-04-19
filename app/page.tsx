import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Testimonial } from "@/components/sections/Testimonial";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CaseStudies />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
