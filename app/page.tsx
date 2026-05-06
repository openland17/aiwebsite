import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Engagement } from "@/components/sections/Engagement";
import { ScopeLimitations } from "@/components/sections/ScopeLimitations";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <SelectedWork />
        <Engagement />
        <ScopeLimitations />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
