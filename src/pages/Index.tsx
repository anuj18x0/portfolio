import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Timeline from "@/components/Timeline";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <main className="relative">
        <section id="hero" className="scroll-mt-16">
          <Hero />
        </section>
        <section id="about" className="scroll-mt-16">
          <About />
        </section>
        <section id="education" className="scroll-mt-16">
          <Education />
        </section>
        <section id="projects" className="scroll-mt-16">
          <Timeline />
        </section>
        <section id="contact" className="scroll-mt-16">
          <CallToAction />
        </section>
      </main>
    </div>
  );
};

export default Index;
