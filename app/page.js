"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 850);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const pointer = document.querySelector(".custom-cursor");
    if (!pointer || window.matchMedia("(pointer: coarse)").matches) return;

    const move = (event) => {
      pointer.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    };
    const down = () => pointer.classList.add("is-pressed");
    const up = () => pointer.classList.remove("is-pressed");
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
    };
  }, []);

  return (
    <>
      <div className="custom-cursor" aria-hidden="true" />
      <AnimatePresence>
        {loading && (
          <motion.div
            className="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
            aria-label="Loading portfolio"
          >
            <motion.span
              className="loader-initials"
              initial={{ opacity: 0, y: 12, letterSpacing: "0.28em" }}
              animate={{ opacity: 1, y: 0, letterSpacing: "0.12em" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              AB
            </motion.span>
            <span className="loader-track"><span /></span>
          </motion.div>
        )}
      </AnimatePresence>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
