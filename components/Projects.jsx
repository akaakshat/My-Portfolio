"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Layers3 } from "lucide-react";

const projects = [
  { number: "01", name: "Ecostan Corporate Websites", description: "Developed and maintained corporate websites for the parent company and associated businesses.", stack: ["React.js", "JavaScript", "Web maintenance"], visual: "corporate", label: "CORPORATE / WEB" },
  { number: "02", name: "Fleet & Vehicle Management CRM", description: "Built a CRM platform for managing company fleet information, maintaining records for more than 90 vehicles.", stack: ["Next.js", "Node.js", "MongoDB"], visual: "fleet", label: "OPERATIONS / CRM" },
  { number: "03", name: "Trendify E-commerce", description: "MERN-stack e-commerce application featuring an AI chatbot and a modern shopping experience.", stack: ["MongoDB", "Express", "React", "Node.js"], visual: "commerce", label: "COMMERCE / AI" },
  { number: "04", name: "Job Portal & ATS Checker", description: "A job portal featuring authentication, job listings, resume builder, ATS checker, and user-friendly dashboards.", stack: ["React", "Node.js", "ATS"], visual: "jobs", label: "CAREERS / PRODUCT" },
  { number: "05", name: "Axel Furniture Website", description: "A modern furniture website with responsive layouts and interactive product presentation.", stack: ["React", "CSS", "Responsive UI"], visual: "furniture", label: "E-COMMERCE / DESIGN" },
  { number: "06", name: "React AirPods Animation", description: "An interactive React experience with an animated product presentation.", stack: ["React", "Animation", "JavaScript"], visual: "audio", label: "INTERACTION / MOTION" },
];

function ProjectArtwork({ project }) {
  return (
    <div className={`project-artwork artwork-${project.visual}`} aria-hidden="true">
      <div className="artwork-topline"><span>{project.label}</span><span>↗</span></div>
      {project.visual === "corporate" && <div className="corporate-art"><span className="mini-brand">EC<span>O</span>STAN</span><strong>Engineering<br />a better tomorrow.</strong><i /><span className="art-line" /></div>}
      {project.visual === "fleet" && <div className="fleet-art"><div className="fleet-sidebar"><i /><i /><i /><i /></div><div className="fleet-main"><span className="mini-kicker">FLEET OVERVIEW</span><div className="fleet-stat"><b>92</b><i /></div><div className="fleet-chart"><i /><i /><i /><i /><i /><i /><i /><i /></div><div className="fleet-table"><i /><i /><i /><i /></div></div></div>}
      {project.visual === "commerce" && <div className="commerce-art"><span className="commerce-logo">TRENDIFY</span><div className="commerce-product"><div className="commerce-bag" /><div className="commerce-orb" /></div><span className="commerce-caption">A LITTLE<br />MORE YOU.</span></div>}
      {project.visual === "jobs" && <div className="jobs-art"><div className="jobs-top"><span>CAREER<br />PATH</span><div className="jobs-avatar" /></div><div className="jobs-search">Find your next move <i>⌕</i></div><div className="jobs-role"><b>Product Designer</b><i /><small>Remote / Full time</small></div><div className="jobs-role secondary"><b>Frontend Engineer</b><i /><small>Hybrid / Full time</small></div></div>}
      {project.visual === "furniture" && <div className="furniture-art"><span className="furniture-word">Objects<br />for living.</span><div className="chair"><i /><b /><em /></div><span className="furniture-dot" /></div>}
      {project.visual === "audio" && <div className="audio-art"><div className="audio-orbit" /><div className="earbud earbud-left"><i /></div><div className="earbud earbud-right"><i /></div><span className="audio-caption">SOUND, IN<br />A NEW LIGHT.</span></div>}
      <div className="artwork-footer"><span>AK / {project.number}</span><span>SELECTED PROJECT</span></div>
    </div>
  );
}

export default function Projects() {
  const tilt = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    event.currentTarget.style.setProperty("--tilt-x", `${(0.5 - y) * 5}deg`);
    event.currentTarget.style.setProperty("--tilt-y", `${(x - 0.5) * 6}deg`);
  };
  const resetTilt = (event) => {
    event.currentTarget.style.setProperty("--tilt-x", "0deg");
    event.currentTarget.style.setProperty("--tilt-y", "0deg");
  };

  return (
    <section className="section projects-section" id="projects" aria-labelledby="projects-title">
      <div className="section-index"><span>04</span><i /> SELECTED WORK</div>
      <div className="projects-heading"><div><p className="eyebrow">A FEW THINGS I&apos;VE MADE</p><h2 className="section-title" id="projects-title">Things I&apos;ve<br /><span className="title-accent">built.</span></h2></div><p>Different problems, different scales, one shared goal: make useful things feel considered.</p></div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.article className="project-card" key={project.number} onPointerMove={tilt} onPointerLeave={resetTilt} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ delay: (index % 2) * 0.1, duration: 0.6 }}>
            <ProjectArtwork project={project} />
            <div className="project-details"><div className="project-number">{project.number} <span><Layers3 size={13} /> CASE STUDY</span></div><div className="project-title-row"><h3>{project.name}</h3><span className="project-arrow" aria-hidden="true"><ArrowUpRight size={17} /></span></div><p>{project.description}</p><div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div>
          </motion.article>
        ))}
      </div>
      <p className="projects-note">Project links can be added when live demos and repositories are available.</p>
    </section>
  );
}
