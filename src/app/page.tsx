import About from "./_components/About";
import Contact from "./_components/Contact";
import Hero from "./_components/Hero";
import Projects from "./_components/Projects";
import Skills from "./_components/Skills";

const HomePage = () => {
  return (
    <main className="min-h-dvh overflow-x-hidden">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
};

export default HomePage;
