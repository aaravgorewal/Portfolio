"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal, Mail } from "lucide-react";
import Link from "next/link";
import { SplineScene } from "@/components/ui/spline";
import { GithubIcon, LinkedinIcon, InstagramIcon, TwitterIcon } from "@/components/ui/social-icons";

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen flex items-center bg-gradient-to-b from-[#020617] via-[#020617] to-[#000000] relative overflow-hidden pt-20 pb-20">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 px-6 relative z-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center z-10 py-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.2)] w-fit mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent-blue)] animate-pulse"></span>
            <span className="text-sm font-medium text-[var(--color-accent-blue)] uppercase tracking-wider">Aarav Saini</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
            BUILDING AI SYSTEMS <br />
            <span className="text-gradient-primary">THAT SOLVE REAL PROBLEMS</span>
          </h1>

          <p className="text-[16px] md:text-[18px] text-[var(--color-text-secondary)] max-w-[500px] leading-relaxed mb-8">
            <span className="text-white font-medium">AI & ML Student</span> | <span className="text-white font-medium">4× Hackathon Winner</span> | Focused on real-world applications
          </p>

          <div className="flex items-center gap-2 text-sm font-mono text-[var(--color-text-secondary)] opacity-80 bg-[#0F172A]/50 w-fit px-3 py-2 rounded-md border border-[#1E293B] mb-10">
            <Terminal size={14} className="text-[var(--color-accent-blue)]" />
            <span>user@aarav:~$</span>
            <span className="text-white">building_the_future</span>
            <span className="w-1.5 h-3 bg-[var(--color-accent-blue)] animate-pulse inline-block ml-1"></span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="#projects" className="btn-primary flex items-center gap-2">
              View Projects <ArrowRight size={18} />
            </Link>
            <a href="https://drive.google.com/file/d/1Bpk5vrPC7Aer8oCuaRSNZF4seZHYchFL" target="_blank" className="px-6 py-3 rounded-[10px] bg-[rgba(30,41,59,0.5)] border border-[#334155] hover:bg-[#1E293B] hover:border-[var(--color-accent-blue)] transition-all duration-300 flex items-center gap-2 text-white font-medium">
              <Download size={18} /> Resume
            </a>
          </div>

          <div className="mt-8 flex flex-col items-center md:items-start">
            <p className="text-sm text-neutral-400 mb-4">Connect with me</p>
            <div className="flex items-center justify-center gap-4">
              <a 
                href="https://github.com/aaravgorewal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-2 rounded-md border border-neutral-700 hover:border-white hover:bg-white/10 transition"
              >
                <GithubIcon className="w-5 h-5 group-hover:scale-110 transition" />
              </a>

              <a 
                href="https://linkedin.com/in/aaravgorewal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-2 rounded-md border border-neutral-700 hover:border-blue-400 hover:bg-blue-400/10 transition"
              >
                <LinkedinIcon className="w-5 h-5 group-hover:scale-110 transition" />
              </a>

              <a 
                href="https://instagram.com/aaravgorewal1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-2 rounded-md border border-neutral-700 hover:border-pink-400 hover:bg-pink-400/10 transition"
              >
                <InstagramIcon className="w-5 h-5 group-hover:scale-110 transition" />
              </a>

              <a 
                href="https://twitter.com/aaravgorewal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-2 rounded-md border border-neutral-700 hover:border-sky-400 hover:bg-sky-400/10 transition"
              >
                <TwitterIcon className="w-5 h-5 group-hover:scale-110 transition" />
              </a>

              <a 
                href="mailto:sainiaarav331@gmail.com"
                className="group p-2 rounded-md border border-neutral-700 hover:border-green-400 hover:bg-green-400/10 transition"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT CONTENT (3D) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="relative hidden md:flex items-center justify-center w-full h-[500px] md:h-[700px]"
        >
          {/* Subtle glow behind the 3D model */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[var(--color-accent-blue)] blur-[120px] opacity-20 rounded-full pointer-events-none"></div>

          <div className="absolute inset-0 scale-125 translate-x-10">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full pointer-events-auto"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
