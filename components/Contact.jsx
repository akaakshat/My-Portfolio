"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Github, Linkedin, Mail, Send } from "lucide-react";

const linkedin = "https://linkedin.com/in/akshat-bhatnagar-1b1025206";
const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!contactEmail) {
      setStatus("Email delivery is not configured yet. Connect on LinkedIn in the meantime.");
      return;
    }
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(formData.get("subject"));
    const body = encodeURIComponent(`From: ${formData.get("name")} (${formData.get("email")})\n\n${formData.get("message")}`);
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setStatus("Your email app is opening with the message ready to send.");
  };

  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="section-index"><span>06</span><i /> CONTACT</div>
      <div className="contact-heading"><p className="eyebrow">HAVE SOMETHING IN MIND?</p><h2 className="section-title" id="contact-title">Let&apos;s build something<br /><span className="title-accent">extraordinary.</span></h2><p>Have an idea, a project, or an opportunity? Let&apos;s connect and create something meaningful.</p></div>
      <div className="contact-layout">
        <motion.div className="contact-details" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55 }}>
          <span className="contact-label">START A CONVERSATION</span>
          <div className="contact-method"><span className="contact-method-icon"><Mail size={17} /></span><span><small>EMAIL</small><strong>akshatb710@gmail.com</strong></span></div>
          <a className="contact-method" href={linkedin} target="_blank" rel="noreferrer"><span className="contact-method-icon"><Linkedin size={17} /></span><span><small>linkedin.com/in/akshat-bhatnagar-1b1025206</small><strong>Connect with Akshat</strong></span><ArrowUpRight size={15} /></a>
          <div className="contact-method contact-method-muted"><span className="contact-method-icon"><Github size={17} /></span><span><small>GITHUB</small><strong>https://github.com/akaakshat</strong></span></div>
          <a className="button button-quiet resume-link" href="/Akshat-Bhatnagar-Resume.txt" download>Download resume <ArrowUpRight size={15} /></a>
        </motion.div>
        <motion.form className="contact-form" onSubmit={handleSubmit} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: 0.1 }}>
          <div className="form-heading"><span>01 / SAY HELLO</span><span>ALL FIELDS REQUIRED</span></div>
          <label>Name<input name="name" type="text" placeholder="Your name" autoComplete="name" required /></label>
          <label>Email<input name="email" type="email" placeholder="you@example.com" autoComplete="email" required /></label>
          <label>Subject<input name="subject" type="text" placeholder="What would you like to discuss?" required /></label>
          <label>Message<textarea name="message" placeholder="A little context goes a long way..." rows={4} required /></label>
          <button className="button button-primary form-submit" type="submit">Prepare message <Send size={15} /></button>
          {status && <p className="form-status" role="status"><Check size={14} />{status}</p>}
        </motion.form>
      </div>
    </section>
  );
}
