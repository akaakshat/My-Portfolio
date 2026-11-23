"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

const SkillOrbit = dynamic(() => import("./3d/SkillOrbit"), { ssr: false, loading: () => <div className="orbit-loading" /> });

const skillGroups = [
  { title: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Tailwind CSS"] },
  { title: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
  { title: "Database", items: ["MongoDB", "MySQL"] },
  { title: "Tools & workflow", items: ["Git", "GitHub", "Claude AI", "GitHub Copilot", "Power BI", "VS Code"] },
];
const colors = ["#54d4e4", "#8e7bf5", "#77d6bb", "#a4a8ff", "#e49c73", "#73afd9"];

export default function Skills() {
  const reducedMotion = useReducedMotion();
  const items = useMemo(() => skillGroups.flatMap((group) => group.items.map((name, index) => ({ name, color: colors[index % colors.length] }))), []);
  return (
    <section className="section skills-section" id="skills" aria-labelledby="skills-title">
      <div className="section-index"><span>02</span><i /> TOOLKIT</div>
      <div className="skills-heading">
        <div><p className="eyebrow">TOOLS OF THE TRADE</p><h2 className="section-title" id="skills-title">My technology<br /><span className="title-accent">universe.</span></h2></div>
        <p className="skills-intro">A flexible toolkit for building across the stack, turning product ideas into dependable, polished experiences.</p>
      </div>
      <div className="skills-showcase">
        <div className="skill-orbit-stage" aria-label="Interactive 3D technology orbit"><SkillOrbit items={items} reducedMotion={reducedMotion} /></div>
        <div className="skill-catalog">
          {skillGroups.map((group, groupIndex) => (
            <motion.div className="skill-group" key={group.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: groupIndex * 0.08, duration: 0.5 }}>
              <h3>{group.title}<span>0{groupIndex + 1}</span></h3>
              <div className="skill-tags">{group.items.map((item, index) => <span className="skill-tag" key={item} style={{ "--tag-color": colors[(index + groupIndex) % colors.length] }}>{item}</span>)}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
