import { dots } from "@/constants/dots";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-dvh flex items-center overflow-hidden">
      <div className="relative min-h-dvh min-w-dvw">
        <Image
          src={"/images/hero-section-image.png"}
          alt="Hero-Section"
          fill
          sizes="100dvh"
          className="object-cover object-center"
          priority={true}
          loading="eager"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Dummy Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot, idx) => (
          <div
            key={idx}
            className="absolute size-1.5 rounded-full bg-primary/60"
            style={{
              left: dot.left,
              top: dot.top,
              animation: `slow-drift ${dot.duration} ease-in-out infinite`,
              animationDelay: dot.delay,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
