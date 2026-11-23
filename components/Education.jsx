"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section className="section education-section" id="education" aria-labelledby="education-title">
      <div className="section-index"><span>05</span><i /> EDUCATION</div>
      <div className="education-layout">
        <div><p className="eyebrow">FOUNDATIONS</p><h2 className="section-title" id="education-title">Learning is<br /><span className="title-accent">the constant.</span></h2></div>
        <motion.article className="education-card" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.65 }}>
          <span className="education-icon"><GraduationCap size={22} strokeWidth={1.4} /></span>
          <span className="education-kicker">POSTGRADUATE</span>
          <h3>Master of Computer<br />Applications <span>(MCA)</span></h3>
          <p>Galgotias University</p>
          <div className="education-line"><i /><span>COMPUTING / APPLICATIONS</span></div>
        </motion.article>
      </div>
    </section>
  );
}
