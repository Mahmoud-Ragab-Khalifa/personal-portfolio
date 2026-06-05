"use client";

import { skills } from "@/constants/skills";
import Marquee from "react-fast-marquee";

const Skills = () => {
  return (
    <section className="section-gap relative overflow-hidden" id="skills">
      <p className="text-sm text-muted-foreground mb-10 text-center">
        <span className="text-primary animate-pulse">{`< `}</span>Technologies I
        work with <span className="text-primary animate-pulse">{`/>`}</span>
      </p>

      <div className="absolute left-0 inset-y-0 w-32 bg-linear-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 inset-y-0 w-32 bg-linear-to-l from-background to-transparent z-10" />
      <Marquee speed={50} gradient={false}>
        {skills.map((skill) => (
          <div key={skill.name} className="glass p-6 rounded-2xl w-50 mx-3">
            <skill.icon color={skill.color} size={50} className="mx-auto" />
            <span className="block text-center pt-4">{skill.name}</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Skills;
