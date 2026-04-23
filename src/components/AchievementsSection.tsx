"use client";

import { motion } from "framer-motion";
import { Award, Trophy, Cpu, Globe } from "lucide-react";

const achievements = [
  {
    icon: <Trophy size={24} />,
    title: "4× Hackathon Winner",
    description: "Consistent top-tier performance in national and global tech competitions.",
    color: "var(--color-accent-blue)"
  },
  {
    icon: <Award size={24} />,
    title: "10+ Hackathons Participated",
    description: "Extensive experience in rapid prototyping and high-pressure development.",
    color: "var(--color-accent-purple)"
  },
  {
    icon: <Cpu size={24} />,
    title: "Built AI + Hardware",
    description: "Successfully bridged AI algorithms with physical Arduino-based hardware.",
    color: "var(--color-success)"
  },
  {
    icon: <Globe size={24} />,
    title: "Deployed Web Apps",
    description: "Delivered fully functional, scalable full-stack applications to production.",
    color: "#F59E0B"
  }
];

export default function AchievementsSection() {
  return (
    <section className="py-20 px-6 md:px-10 max-w-[1200px] mx-auto w-full relative z-10">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Milestones & <span className="text-[var(--color-accent-blue)]">Achievements</span></h2>
        <div className="w-20 h-1 bg-gradient-primary rounded-full"></div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card-bg p-6 rounded-xl border border-[#1E293B] hover:border-[var(--color-accent-blue)] hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all flex flex-col gap-4 group"
          >
            <div 
              className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#0F172A] border border-[#1E293B] group-hover:scale-110 transition-transform"
              style={{ color: item.color }}
            >
              {item.icon}
            </div>
            <div>
              <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
