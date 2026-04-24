"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50"
    >
      {/* Liquid Glow Layer */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-transparent to-purple-500/10 blur-xl opacity-50 pointer-events-none -z-10"></div>

      {/* Main Glass Container */}
      <div className={`relative flex items-center justify-between px-6 py-3 rounded-2xl backdrop-blur-xl transition-all duration-300 border shadow-[0_8px_32px_rgba(0,0,0,0.3)] ${
        isScrolled ? "bg-white/10 border-white/20 backdrop-blur-2xl" : "bg-white/5 border-white/10"
      }`}>

        {/* Logo */}
        <Link href="/" className="text-white font-semibold text-lg tracking-wide">
          Aarav<span className="text-indigo-400">.</span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-white hover:opacity-100 transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          {/* Resume CTA */}
          <a 
            href="https://drive.google.com/file/d/1Bpk5vrPC7Aer8oCuaRSNZF4seZHYchFL" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:block px-5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 hover:scale-105 text-sm text-white transition-all duration-200 backdrop-blur-md border border-white/5"
          >
            Resume
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-1 hover:bg-white/10 rounded-md transition"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[60px] left-0 right-0 bg-[#020617]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl md:hidden flex flex-col p-4 gap-2 overflow-hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-neutral-300 hover:text-white hover:bg-white/5 p-3 rounded-xl transition-all duration-200 text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://drive.google.com/file/d/1Bpk5vrPC7Aer8oCuaRSNZF4seZHYchFL"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 w-full text-center px-4 py-3 rounded-xl bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30 hover:text-white transition-all duration-200 text-sm font-medium border border-indigo-500/20"
            >
              View Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
