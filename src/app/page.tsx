import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Clients from "@/components/Clients";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <main className="flex-1 w-full flex flex-col">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Clients />
        <ContactForm />
      </main>
    </>
  );
}
