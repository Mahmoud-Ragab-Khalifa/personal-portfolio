import { highlights } from "@/constants/highlights";

const About = () => {
  return (
    <section className="section-gap" id="about">
      <div className="container grid gap-16 xl:grid-cols-2 items-center">
        <div className="space-y-8">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase mb-5 block">
            About Me
          </span>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-secondary-foreground w-full max-w-2xl">
            Building the future,
            <span className="font-serif italic font-normal text-white">
              {" "}
              one component at a time.
            </span>
          </h2>

          <div className="space-y-4 text-muted-foreground">
            <p>
              I&apos;m a passionate software engineer with over 2 years of
              experience crafting digital products that make a difference. My
              journey started with a curiosity for how things work on the web,
              and it has evolved into a deep expertise in modern frontend
              technologies.
            </p>
            <p>
              I specialize in React, Next.js, and TypeScript, building
              everything from sleek landing pages to complex enterprise
              applications. My approach combines technical excellence with a
              keen eye for design and user experience.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring new
              technologies, contributing to open-source projects, or sharing
              knowledge with the developer community.
            </p>
          </div>

          <div className="glass rounded-2xl p-6 glow-border">
            <p className="text-lg font-medium italic text-foreground">
              &quot;My mission is to create digital experiences that are not
              just functional, but truly delightful — products that users love
              to use and developers love to maintain.&quot;
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="glass p-6 rounded-2xl"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
