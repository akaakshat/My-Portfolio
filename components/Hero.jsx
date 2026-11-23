"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowDownRight, ArrowUpRight, Download } from "lucide-react";

const HeroScene = dynamic(() => import("./3d/HeroScene"), {
  ssr: false,
  loading: () => <div className="scene-loading" aria-hidden="true" />,
});

const resumePath = "/Akshat-Bhatnagar-Resume.txt";

export default function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orbit-label"><span className="status-dot" /> AVAILABLE FOR SELECT PROJECTS</div>
      <div className="hero-scene-wrap" aria-hidden="true"><HeroScene reducedMotion={reducedMotion} /></div>
      <div className="hero-copy">
        <motion.p className="eyebrow hero-eyebrow" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.55 }}>
          DEVELOPER / DESIGNER <span>—</span> INDIA
        </motion.p>
        <motion.h1 id="hero-title" initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: reducedMotion ? 0 : 0.06, delayChildren: 0.92 } } }}>
          {["AKSHAT", "BHATNAGAR"].map((word) => (
            <span className="hero-title-line" key={word}>
              {word.split("").map((letter, index) => (
                <motion.span className={word === "BHATNAGAR" ? "accent-letter" : ""} key={`${word}-${index}`} variants={{ hidden: { y: "110%", opacity: 0 }, visible: { y: "0%", opacity: 1 } }} transition={{ duration: reducedMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}>
                  {letter}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>
        <motion.p className="hero-role" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.55, duration: 0.6 }}>
          Full Stack Developer <span>/</span> Creative Developer <span>/</span> Problem Solver
        </motion.p>
        <motion.p className="hero-description" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.7, duration: 0.6 }}>
          I build modern web experiences, scalable applications, intelligent CRM solutions, and interactive digital products.
        </motion.p>
        <motion.div className="hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.85, duration: 0.55 }}>
          <a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={16} /></a>
          <a className="button button-quiet" href={resumePath} download>Download resume <Download size={15} /></a>
        </motion.div>
      </div>
      <div className="hero-coordinate" aria-hidden="true">28° 27&apos; 35.8&quot; N<br />77° 30&apos; 12.2&quot; E</div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to about section"><span>SCROLL TO EXPLORE</span><i><ArrowDown size={14} /></i></a>
      <a className="hero-side-link" href="#projects"><span>01 — SELECTED WORK</span><ArrowUpRight size={13} /></a>
    </section>
  );
}
