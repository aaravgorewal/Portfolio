"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 md:px-10 max-w-[1200px] mx-auto w-full relative z-10">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col items-start mb-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-[var(--color-accent-blue)]">Me</span></h2>
            <div className="w-20 h-1 bg-gradient-primary rounded-full"></div>
          </div>
          
          <h3 className="text-xl font-semibold text-white leading-relaxed">
            I am an AI & ML Engineering student with an obsession for solving real-world problems through intelligent systems.
          </h3>
          
          <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
            My journey is driven by a <span className="text-[var(--color-accent-blue)] font-medium">hackathon-driven learning mindset</span>. I thrive in high-pressure, fast-paced environments where I can build, break, and iterate rapidly. Rather than just following tutorials, I build AI-powered applications from scratch, focusing on scalability and impact.
          </p>

          <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
            I specialize in bridging the gap between theoretical machine learning and functional full-stack products, seamlessly integrating AI models with web interfaces and hardware components.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-primary rounded-2xl blur opacity-20"></div>
          <div className="card-bg p-8 rounded-2xl border border-[#1E293B] relative h-full flex flex-col justify-center">
            <div className="flex items-center gap-3 border-b border-[#1E293B] pb-4 mb-6">
              <Terminal size={20} className="text-[var(--color-accent-blue)]" />
              <span className="font-mono text-sm text-[var(--color-text-secondary)]">aarav_profile.json</span>
            </div>
            
            <div className="font-mono text-sm sm:text-base">
              <div className="flex gap-4 mb-3">
                <span className="text-[var(--color-accent-purple)]">"role":</span>
                <span className="text-white">"AI & ML Engineer"</span>
              </div>
              <div className="flex gap-4 mb-3">
                <span className="text-[var(--color-accent-purple)]">"education":</span>
                <span className="text-white">"B.Tech AI & ML"</span>
              </div>
              <div className="flex gap-4 mb-3">
                <span className="text-[var(--color-accent-purple)]">"superpower":</span>
                <span className="text-[var(--color-accent-blue)]">"Rapid Prototyping"</span>
              </div>
              <div className="flex gap-4 mb-3">
                <span className="text-[var(--color-accent-purple)]">"hobbies":</span>
                <span className="text-white">["Hackathons", "Hardware", "Open Source"]</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
