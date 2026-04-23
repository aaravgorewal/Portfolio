"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "Python", level: 90 },
      { name: "TensorFlow / PyTorch", level: 85 },
      { name: "OpenAI API", level: 95 },
      { name: "NLP & Computer Vision", level: 80 }
    ]
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js / Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 80 }
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js / Express", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "MongoDB / SQL", level: 75 },
      { name: "Python FastAPI", level: 80 }
    ]
  },
  {
    title: "Tools & Hardware",
    skills: [
      { name: "Git & GitHub", level: 95 },
      { name: "Docker", level: 70 },
      { name: "Arduino / C++", level: 85 },
      { name: "Linux / Bash", level: 80 }
    ]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 md:px-10 max-w-[1200px] mx-auto w-full relative z-10">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[var(--color-accent-blue)] rounded-full mix-blend-multiply filter blur-[128px] opacity-10"></div>
      
      <div className="flex flex-col items-center mb-16 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical <span className="text-[var(--color-accent-purple)]">Arsenal</span></h2>
        <div className="w-20 h-1 bg-gradient-primary rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-full"
          >
            <Card className="p-8 h-full flex flex-col gap-8 hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-xl font-bold border-b border-[#334155] pb-4 text-white tracking-wide">
                {category.title}
              </h3>
              <div className="flex flex-col gap-6">
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex flex-col gap-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-[var(--color-accent-blue)] font-bold bg-[#0F172A] px-2 py-1 rounded-md border border-[#1E293B]">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-2.5 bg-[#0F172A] rounded-full overflow-hidden border border-[#1E293B]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (i * 0.1) }}
                        className="h-full bg-gradient-primary rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-white/20"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
