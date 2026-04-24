"use client";

import { motion } from "framer-motion";
import { ExternalLink, Bot, BrainCircuit, CheckSquare, GraduationCap, Code } from "lucide-react";
import { Card } from "@/components/ui/card";
import { GithubIcon } from "@/components/ui/social-icons";

const projects = [
  {
    title: "MindsetX – AI Wellness",
    tag: "FEATURED",
    description: "Delivered a secure, intelligent platform that adapts to behavior while ensuring strict data privacy.",
    highlights: [
      "Engineered a 'Bio Vault' with AI insights",
      "Strict data privacy and security",
      "Adaptive personalization logic"
    ],
    tech: ["React.js", "Node.js", "AI Logic", "MongoDB"],
    github: "#",
    live: "#",
    featured: true,
    icon: BrainCircuit
  },
  {
    title: "EduLearn – Smart Learning Platform",
    tag: "WEB APP",
    description: "A platform designed to organize educational content and improve student productivity.",
    highlights: [
      "Structured learning resources for students",
      "Clean and responsive UI",
      "Focus on improving study efficiency"
    ],
    tech: ["React", "Node", "CSS/Tailwind"],
    github: "#",
    live: "#",
    featured: false,
    icon: GraduationCap
  },
  {
    title: "AI Chatbot + Hardware",
    tag: "AI PROJECT",
    description: "Created a real-time system where voice/text commands directly trigger physical hardware actions.",
    highlights: [
      "Real-time AI + hardware integration",
      "REST API with CRUD operations",
      "Responsive UI with optimized performance"
    ],
    tech: ["React", "Node", "Python", "Arduino"],
    github: "#",
    live: "#",
    featured: false,
    icon: Bot
  },
  {
    title: "Task Manager Web App",
    tag: "WEB APP",
    description: "Achieved instant CRUD operations with a highly responsive architecture and frictionless UX.",
    highlights: [
      "Streamlined API-driven React dashboard",
      "Highly responsive architecture",
      "Frictionless UX"
    ],
    tech: ["React.js", "REST API", "Tailwind", "Express"],
    github: "#",
    live: "#",
    featured: false,
    icon: CheckSquare
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 md:px-10 max-w-[1200px] mx-auto w-full z-10 relative">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected <span className="text-[var(--color-accent-blue)]">Projects</span></h2>
        <div className="w-20 h-1 bg-gradient-primary rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`h-full ${project.featured ? 'md:col-span-2 lg:col-span-2' : ''}`}
            >
              <Card className="p-7 rounded-lg shadow-sm hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:border-[var(--color-accent-blue)] hover:scale-[1.02] transition-all duration-300 group flex flex-col h-full bg-[#020617]/80 border-[#1E293B]">

                {/* Header (Icon + Tag) */}
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 rounded-md ${project.featured ? 'bg-[var(--color-accent-blue)]/10 text-[var(--color-accent-blue)]' : 'bg-[#1E293B] text-[var(--color-text-secondary)]'}`}>
                    <Icon size={24} />
                  </div>
                  <div className={`text-xs font-bold px-3 py-1 rounded-full tracking-wider ${project.featured ? 'bg-gradient-primary text-white' : 'bg-[#0F172A] border border-[#1E293B] text-[var(--color-text-secondary)]'}`}>
                    {project.tag}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className={`text-2xl font-bold mb-3 group-hover:text-[var(--color-accent-blue)] transition-colors`}>
                  {project.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="list-disc pl-4 space-y-2 mb-6 marker:text-[var(--color-accent-blue)] text-sm text-[var(--color-text-secondary)] flex-grow">
                  {project.highlights.map((pt, i) => (
                    <li key={i}>
                      <span className="text-white/90">{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 bg-[#0F172A] border border-[#1E293B] text-[var(--color-text-secondary)] font-medium rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-6 border-t border-[#1E293B] mt-auto">
                  {project.live && project.live !== "#" ? (
                    <a 
                      href={project.live} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex justify-center items-center gap-2 text-sm font-medium py-2.5 rounded-md bg-[var(--color-accent-blue)] text-white hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  ) : (
                    <a 
                      href={project.github} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex justify-center items-center gap-2 text-sm font-medium py-2.5 rounded-md bg-[#0F172A] border border-[#1E293B] text-white hover:border-[var(--color-accent-blue)] hover:bg-[var(--color-accent-blue)]/10 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" /> Source Code
                    </a>
                  )}
                </div>

              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
