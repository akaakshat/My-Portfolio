"use client";

import { ArrowUpRight, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top"><a className="footer-brand" href="#home">AKSHAT<span>BHATNAGAR</span></a><a href="#home" className="back-top">BACK TO THE TOP <ArrowUp size={14} /></a></div>
      <div className="footer-bottom"><span>DESIGNED & BUILT WITH INTENTION</span><span>© {new Date().getFullYear()} AKSHAT BHATNAGAR</span><a href="https://linkedin.com/in/akshat-bhatnagar-1b1025206" target="_blank" rel="noreferrer">LINKEDIN <ArrowUpRight size={12} /></a></div>
    </footer>
  );
}
