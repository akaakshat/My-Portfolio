"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.15, 0.35, 0.6] }
    );
    links.forEach(([, id]) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-nav">
      <a className="brand-mark" href="#home" aria-label="Akshat Bhatnagar home" onClick={closeMenu}>
        <span className="brand-symbol">A<span>B</span></span>
        <span className="brand-name">AKSHAT BHATNAGAR</span>
      </a>
      <button className="mobile-menu-button" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)}>
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
      <nav className={`nav-links${open ? " is-open" : ""}`} aria-label="Main navigation">
        {links.map(([label, id]) => (
          <a key={id} href={`#${id}`} className={active === id ? "is-active" : ""} onClick={closeMenu}>
            {label}
          </a>
        ))}
        <a className="nav-connect" href="#contact" onClick={closeMenu}>Let&apos;s talk <ArrowUpRight size={14} /></a>
      </nav>
    </header>
  );
}
