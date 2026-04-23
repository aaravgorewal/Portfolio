"use client";

import { motion } from "framer-motion";
import { Code, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";

const projects = [
  {
    title: "AI Chatbot + Hardware",
    points: [
      "Problem: AI systems isolated from physical environments.",
      "Solution: Connected LLMs with Arduino via Bluetooth.",
    ],
    outcome: "Created a real-time system where voice/text commands directly trigger physical hardware actions.",
    tech: ["Python", "Arduino", "Bluetooth", "AI Models"],
    github: "#",
    live: "#",
    featured: true
  },
  {
    title: "MindsetX – AI Wellness",
    points: [
      "Problem: Generic wellness apps lack adaptive personalization.",
      "Solution: Engineered a 'Bio Vault' with AI-driven insights.",
    ],
    outcome: "Delivered a secure, intelligent platform that adapts to behavior while ensuring strict data privacy.",
    tech: ["React.js", "Node.js", "AI Logic", "MongoDB"],
    github: "#",
    live: "#",
    featured: true
  },
  {
    title: "Task Manager Web App",
    points: [
      "Problem: Cluttered, slow task tracking tools for daily use.",
      "Solution: Built a streamlined API-driven React dashboard.",
    ],
    outcome: "Achieved instant CRUD operations with a highly responsive architecture and frictionless UX.",
    tech: ["React.js", "REST API", "Tailwind", "Express"],
    github: "#",
    live: "#",
    featured: false
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 md:px-10 max-w-[1200px] mx-auto w-full z-10 relative">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected <span className="text-[var(--color-accent-blue)]">Projects</span></h2>
        <div className="w-20 h-1 bg-gradient-primary rounded-full"></div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-full"
          >
            <Card className="p-8 h-full flex flex-col hover:-translate-y-2 transition-transform duration-300 group hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] hover:border-[var(--color-accent-blue)] relative overflow-hidden">
              {project.featured && (
                <div className="absolute top-0 right-0 bg-gradient-primary text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider z-10">
                  Featured
                </div>
              )}

              <h3 className={`text-2xl font-bold mb-6 group-hover:text-[var(--color-accent-blue)] transition-colors ${project.featured ? 'pr-12' : ''}`}>
                {project.title}
              </h3>

              <div className="flex flex-col gap-3 flex-grow mb-6 text-sm text-[var(--color-text-secondary)]">
                <ul className="list-disc pl-4 space-y-2 mb-2 marker:text-[var(--color-accent-purple)]">
                  {project.points.map((pt, i) => (
                    <li key={i}>
                      <span className="font-semibold text-white">{pt.split(':')[0]}:</span>
                      {pt.split(':')[1]}
                    </li>
                  ))}
                </ul>
                <div className="bg-[#0F172A]/80 p-4 rounded-lg border border-[#1E293B]">
                  <span className="font-semibold text-[var(--color-accent-blue)] block mb-1">IMPACT</span>
                  <span className="text-white/90 leading-relaxed font-medium">{project.outcome}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs px-3 py-1.5 bg-[#0F172A] border border-[#1E293B] text-[var(--color-text-secondary)] font-medium rounded-md">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-[#1E293B] mt-auto">
                <a href={project.github} className="text-[var(--color-text-secondary)] hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                  <Code size={18} /> Source
                </a>
                <a href={project.live} className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent-purple)] transition-colors flex items-center gap-2 text-sm font-medium">
                  <ExternalLink size={18} /> Live Demo
                </a>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
