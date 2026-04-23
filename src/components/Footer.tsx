import { Code, Briefcase, Bird } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-[#020617] border-t border-[#1E293B] py-10 mt-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-bold font-[family-name:var(--font-poppins)] text-white">
          Aarav<span className="text-[var(--color-accent-blue)]">.</span>
        </div>
        
        <p className="text-[var(--color-text-secondary)] text-sm text-center md:text-left">
          &copy; {currentYear} Aarav. All rights reserved.
        </p>
        
        <div className="flex items-center gap-4">
          <a href="#" className="w-10 h-10 rounded-full bg-[#1E293B] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-white hover:bg-[var(--color-accent-blue)] transition-all">
            <Code size={20} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-[#1E293B] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-white hover:bg-[#0077b5] transition-all">
            <Briefcase size={20} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-[#1E293B] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-white hover:bg-[#1DA1F2] transition-all">
            <Bird size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
