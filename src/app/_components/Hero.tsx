import { dots } from "@/constants/dots";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-dvh flex items-center overflow-hidden bg-secondary">
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

      {/* Content */}
      <div className="relative w-full flex flex-col md:flex-row md:items-center gap-10 container">
        <div className="flex-1 space-y-8">
          {/* Job Badge */}
          <div className="flex items-center gap-2 animate-fade-in glass w-fit text-sm rounded-full px-4 py-2">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-primary flex items-center gap-2">
              Computer Engineer
              <span className="size-1 rounded-full bg-primary" />
              Frontend Developer
            </span>
          </div>

          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-fade-in animation-delay-100 max-w-2xl">
            Crafting <span className="text-primary glow-text">digital</span>{" "}
            experiences with{" "}
            <span className="font-serif italic font-normal text-white">
              precision.
            </span>
          </h1>

          <p className="text-lg text-muted-foreground md:max-w-lg animate-fade-in animation-delay-200">
            Hi, I&apos;m Mahmoud Ragab — a software engineer specializing in
            React, Next.js, and TypeScript. I build scalable, performant web
            applications that users love.
          </p>
        </div>

        <div className="w-full max-w-2xs">Image</div>
      </div>
    </section>
  );
};

export default Hero;
