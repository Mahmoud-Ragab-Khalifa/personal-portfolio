import About from "./_components/About";
import Hero from "./_components/Hero";

const HomePage = () => {
  return (
    <main className="min-h-dvh overflow-x-hidden">
      <Hero />
      <About />
    </main>
  );
};

export default HomePage;
