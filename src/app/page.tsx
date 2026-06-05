import About from "./_components/About";
import Hero from "./_components/Hero";
import Projects from "./_components/Projects";

const HomePage = () => {
  return (
    <main className="min-h-dvh overflow-x-hidden">
      <Hero />
      <About />
      <Projects />
    </main>
  );
};

export default HomePage;
