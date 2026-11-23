"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Code2, Layers3, Orbit } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Full-stack thinking", note: "From interface to database" },
  { icon: Layers3, label: "Systems that scale", note: "Products built for real workflows" },
  { icon: Orbit, label: "Curiosity in motion", note: "Always exploring what comes next" },
];

export default function About() {
  return (
    <section className="section about-section" id="about" aria-labelledby="about-title">
      <div className="section-index"><span>01</span><i /> ABOUT</div>
      <div className="about-layout">
        <motion.div className="about-visual" initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}>
          <div className="about-visual-grid" />
          <div className="about-planet"><div className="about-planet-core" /><div className="about-orbit orbit-one" /><div className="about-orbit orbit-two" /><span className="about-orbit-node" /></div>
          <div className="visual-caption"><span>FIG. 01</span><span>IDEAS IN ORBIT</span></div>
          <div className="visual-coordinate">BUILD / ITERATE / REPEAT</div>
        </motion.div>
        <div className="about-content">
          <p className="eyebrow">A LITTLE CONTEXT</p>
          <h2 className="section-title" id="about-title">Beyond<br /><span className="title-accent">the code.</span></h2>
          <p className="about-lede">I&apos;m a developer passionate about building meaningful digital experiences. My work combines frontend engineering, backend development, database management, and creative UI design.</p>
          <p className="body-copy">I enjoy transforming ideas into functional web applications, developing business solutions, and creating interactive user experiences. For me, good software feels thoughtful from the first interaction to the last record saved.</p>
          <div className="highlight-list">
            {highlights.map(({ icon: Icon, label, note }, index) => (
              <motion.div className="highlight-row" key={label} initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.5 }}>
                <span className="highlight-icon"><Icon size={17} strokeWidth={1.5} /></span>
                <span className="highlight-text"><strong>{label}</strong><small>{note}</small></span>
                <ArrowDownRight className="highlight-arrow" size={15} />
              </motion.div>
            ))}
          </div>
          <a className="text-link" href="#experience">A little more about my journey <ArrowDownRight size={15} /></a>
        </div>
      </div>
    </section>
  );
}
