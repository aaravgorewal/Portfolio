"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 md:px-10 max-w-[1200px] mx-auto w-full relative z-10 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-20 items-end">

        {/* LEFT: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col gap-6 max-w-2xl"
        >
          <div className="flex flex-col items-start mb-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              ABOUT <span className="text-[var(--color-accent-blue)]">ME</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary rounded-full"></div>
          </div>

          <div className="space-y-6 text-lg text-[var(--color-text-secondary)] leading-relaxed">
            <p className="text-white font-medium text-xl">
              I am an AI & ML Engineering student focused on building real-world systems that go beyond theory.
            </p>
            <p>
              I follow a <span className="text-[var(--color-accent-purple)] font-medium">hackathon-driven approach</span>, where I learn by building, experimenting, and solving practical problems under real constraints.
            </p>
            <p>
              My work involves developing AI-powered applications, full-stack systems, and integrating intelligent models with real-world interfaces and hardware.
            </p>
            <p>
              I aim to create scalable, impactful solutions that connect software intelligence with real-world use cases.
            </p>
          </div>
        </motion.div>

        {/* RIGHT: Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="relative flex justify-center md:justify-end items-end h-full w-full mt-10 md:mt-0"
        >
          {/* Side Premium Gradient */}
          <div className="absolute right-0 top-0 w-[60%] h-full bg-gradient-to-l from-indigo-500/20 via-transparent to-transparent blur-2xl pointer-events-none"></div>

          {/* Profile Image */}
          <motion.div
            className="relative z-10"
          >
            <img
              src="/Minee.png"
              alt="Aarav Saini"
              className="relative w-[300px] md:w-[550px] lg:w-[600px] object-contain md:translate-x-10 transition-transform duration-500 hover:scale-[1.03]"
              style={{
                filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.6))"
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
