"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, Database, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const responsibilities = [
  "Developed and maintained multiple websites for the parent company and associated businesses using React.js, JavaScript, and modern web technologies.",
  "Worked on backend functionality using Node.js and MongoDB.",
  "Built and maintained a CRM system using React.js, Next.js, Node.js, and MongoDB.",
  "Developed vehicle management functionality to manage and monitor company fleet information.",
  "Maintained records and operational data for more than 90 company vehicles through the CRM system.",
  "Managed database operations, application improvements, bug fixes, and ongoing website maintenance.",
  "Used AI-assisted development tools such as Claude and GitHub Copilot to improve development workflows.",
];

export default function Experience() {
  const sectionRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.fromTo(progressRef.current, { scaleY: 0 }, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%", end: "bottom 65%", scrub: 0.8 },
      });
    }, sectionRef);
    return () => context.revert();
  }, []);

  return (
    <section className="section experience-section" id="experience" ref={sectionRef} aria-labelledby="experience-title">
      <div className="section-index"><span>03</span><i /> EXPERIENCE</div>
      <div className="experience-heading"><div><p className="eyebrow">WORK / IN PRACTICE</p><h2 className="section-title" id="experience-title">Professional<br /><span className="title-accent">journey.</span></h2></div><p className="experience-period">ONE TEAM<br />MANY SYSTEMS</p></div>
      <div className="timeline-layout">
        <div className="timeline-rail" aria-hidden="true"><span className="timeline-rail-track" /><span className="timeline-rail-fill" ref={progressRef} /><span className="timeline-rail-node"><i /></span></div>
        <motion.article className="experience-entry" initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }}>
          <div className="experience-meta"><span className="meta-icon"><BriefcaseBusiness size={18} /></span><span>PROFESSIONAL EXPERIENCE</span></div>
          <h3>Web Developer</h3>
          <div className="company-line"><span>Ecostan Infra Pvt. Ltd.</span><span className="current-badge"><i /> EXPERIENCE</span></div>
          <p className="experience-summary">Building and evolving the digital tools that connect the company&apos;s web presence, internal operations, and fleet.</p>
          <div className="experience-stats">
            <div><Database size={16} /><strong>90+</strong><span>vehicles managed</span></div>
            <div><Sparkles size={16} /><strong>Full stack</strong><span>product development</span></div>
          </div>
          <ul className="responsibility-list">{responsibilities.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ul>
          <a className="text-link experience-link" href="#projects">See selected work <ArrowUpRight size={15} /></a>
        </motion.article>
        <div className="timeline-ambient" aria-hidden="true"><span>01</span><i /><span>NOW</span></div>
      </div>
    </section>
  );
}
