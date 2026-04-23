"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Layers, Cpu } from "lucide-react";
import { Card } from "@/components/ui/card";

const areas = [
  {
    icon: <BrainCircuit size={32} />,
    title: "AI Systems",
    description: "Developing intelligent agents, natural language processing pipelines, and predictive models to automate complex workflows and extract actionable insights.",
    color: "var(--color-accent-blue)"
  },
  {
    icon: <Layers size={32} />,
    title: "Full Stack Development",
    description: "Building robust, scalable web architectures using modern frameworks (Next.js/React) and secure API backends for seamless user experiences.",
    color: "var(--color-accent-purple)"
  },
  {
    icon: <Cpu size={32} />,
    title: "Hardware + AI Integration",
    description: "Deploying machine learning logic directly onto embedded systems and microcontrollers (Arduino, Raspberry Pi) for edge computing solutions.",
    color: "#10B981"
  }
];

export default function WhatIDoSection() {
  return (
    <section className="py-20 px-6 md:px-10 max-w-[1200px] mx-auto w-full relative z-10">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What I <span className="text-[var(--color-accent-blue)]">Do</span></h2>
        <div className="w-20 h-1 bg-gradient-primary rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {areas.map((area, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-8 h-full flex flex-col items-start hover:-translate-y-2 transition-all duration-300 group">
              <div 
                className="w-16 h-16 rounded-xl bg-[#0F172A] border border-[#1E293B] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                style={{ color: area.color }}
              >
                {area.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{area.title}</h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">
                {area.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
