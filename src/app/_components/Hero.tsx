import { dots } from "@/constants/dots";
import Image from "next/image";
import { baseClasses } from "../components/Button";
import { ArrowRight, Download } from "lucide-react";
import AnimatedBorderButton from "../components/AnimatedBorderButton";
import {
  GitHubIcon,
  LinkedInIcon,
  WhatsAppIcon,
} from "../components/SocilaMediaIcons";
import { socialMediaLinks } from "@/constants/socialMediaLinks";

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

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
            <a
              href="https://wa.me/201067055256"
              target="_blank"
              rel="noopener noreferrer"
              className={`${baseClasses} lg:px-8 lg:py-4 lg:text-lg`}
            >
              Contact Me <ArrowRight className="w-5 h-5" />
            </a>

            <AnimatedBorderButton
              href="/resume/MahmoudRagabResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="w-5 h-5" />
              View Resume
            </AnimatedBorderButton>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
            <span className="text-sm text-muted-foreground">Follow me: </span>
            {socialMediaLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                {<social.icon />}
              </a>
            ))}
          </div>
        </div>

        <div className="w-full max-w-2xs">Image</div>
      </div>
    </section>
  );
};

export default Hero;
