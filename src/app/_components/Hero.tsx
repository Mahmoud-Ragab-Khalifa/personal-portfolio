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
      </div>
    </section>
  );
};

export default Hero;
