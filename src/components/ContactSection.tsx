"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 md:px-10 max-w-[1200px] mx-auto w-full">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Let's Build Something <span className="text-[var(--color-accent-blue)]">Valuable</span></h2>
        <div className="w-20 h-1 bg-gradient-primary rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-8"
        >
          <div>
            <h3 className="text-2xl font-bold mb-4">Let's build something together!</h3>
            <p className="text-[var(--color-text-secondary)] mb-2">
              I'm always open to discussing product design work, AI innovations, or partnership opportunities.
            </p>
            <p className="text-[var(--color-accent-blue)] font-medium">
              Available for freelance projects, internships, and collaborations
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[rgba(59,130,246,0.1)] flex items-center justify-center text-[var(--color-accent-blue)]">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-[var(--color-text-secondary)]">Email</p>
                <p className="font-medium">aaravgorewal@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[rgba(139,92,246,0.1)] flex items-center justify-center text-[var(--color-accent-purple)]">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-[var(--color-text-secondary)]">Location</p>
                <p className="font-medium">Global / Remote</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card-bg p-8 rounded-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent-blue)] blur-[80px] opacity-20"></div>

          <form className="flex flex-col gap-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-[var(--color-text-secondary)]">Name</label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                className="w-full bg-[#020617] border border-[#334155] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-accent-blue)] focus:ring-1 focus:ring-[var(--color-accent-blue)] transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-[var(--color-text-secondary)]">Email</label>
              <input
                type="email"
                id="email"
                placeholder="john@example.com"
                className="w-full bg-[#020617] border border-[#334155] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-accent-blue)] focus:ring-1 focus:ring-[var(--color-accent-blue)] transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-[var(--color-text-secondary)]">Message</label>
              <textarea
                id="message"
                rows={4}
                placeholder="How can I help you?"
                className="w-full bg-[#020617] border border-[#334155] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-accent-blue)] focus:ring-1 focus:ring-[var(--color-accent-blue)] transition-all resize-none"
              ></textarea>
            </div>

            <button type="submit" className="btn-primary flex items-center justify-center gap-2 mt-2">
              Send Message <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
