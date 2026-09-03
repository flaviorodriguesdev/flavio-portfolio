"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, X, ExternalLink } from "lucide-react"; 
import { 
  FaGithub, FaLinkedin, FaPython, FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs 
} from "react-icons/fa";
import { SiMysql, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

// --- DADOS DO PORTEFÓLIO ---

const SKILLS = {
  comfortable: [
    { name: "C#", icon: <TbBrandCSharp className="text-white" /> },
    { name: "Java", icon: <FaJava className="text-white" /> },
    { name: "Python", icon: <FaPython className="text-white" /> },
    { name: "JavaScript", icon: <FaJs className="text-white" /> },
    { name: "HTML", icon: <FaHtml5 className="text-white" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-white" /> },
    { name: "MySQL", icon: <SiMysql className="text-white" /> },
  ],
  learning: [
    { name: "React", icon: <FaReact className="text-neutral-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-neutral-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-neutral-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-neutral-500" /> },
  ]
};

const EXPERIENCE = [
  {
    title: "Freelance Web Developer",
    company: "Self-employed - Remote",
    date: "2025 - Present",
    desc: "Architected and developed custom responsive websites and landing pages for local businesses, including barbershops and auto detailing companies. Managed the end-to-end software development lifecycle—from client briefing and UI/UX design to full deployment and ongoing maintenance.",
    tech: ["HTML", "CSS", "JavaScript", "UI/UX"]
  },
  {
    title: "Web Developer & Multimedia Manager",
    company: "BMP Automóveis",
    date: "Jun 2026 - Present",
    desc: "Development and continuous maintenance of the dealership's digital platform. Active management of social media, vehicle inventory descriptions, and advanced image/video editing to drive lead conversion.",
    tech: ["HTML", "CSS", "JavaScript", "Media Management"]
  },
  {
    title: "Software Engineering Intern",
    company: "Measure Pro",
    date: "Apr 2026 - Jun 2026",
    desc: "Developed a fully interactive 3D web-based simulator for a CNC wire bending machine. Translated complex industrial requirements into functional digital interfaces, optimizing technical validation before physical implementation.",
    tech: ["JavaScript", "HTML", "CSS", "Python"]
  }
];

const PROJECTS = [
  {
    id: "measure",
    title: "CNC 3D Simulator",
    category: "Engineering & Web 3D",
    desc: "An interactive 3D web simulator built for Measure Pro. It allows engineers to test and visualize equipment behavior, simulating manufacturing processes digitally to validate complex industrial requirements.",
    tech: ["JavaScript", "HTML", "CSS", "Python"],
    screenshots: ["/assets/measure-1.png", "/assets/measure-2.png"], // Confirma a extensão das tuas prints do Measure!
    live: "", 
    github: "https://github.com/flaviorodriguesdev/software3dobragemdearame"
  },
  {
    id: "bmp",
    title: "BMP Automóveis Platform",
    category: "Corporate Website & Media",
    desc: "A digital showcase and lead conversion platform for a car dealership. The project focuses heavily on user experience, mobile responsiveness, and fast inventory browsing.",
    tech: ["HTML", "CSS", "JavaScript"],
    screenshots: [
      "/assets/bmp-1.png",
      "/assets/bmp-2.png",
      "/assets/bmp-3.png",
      "/assets/bmp-4.png",
      "/assets/bmp-5.png"
    ],
    live: "https://bmpautomoveis.pt",
    github: ""
  }
];

// --- COMPONENTE DE TÍTULO ANIMADO 3D (PARALLAX + PERSPECTIVE) ---
function AnimatedTitle({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const y = useTransform(smoothProgress, [0, 0.5, 1], [150, 0, -250]);
  const rotateX = useTransform(smoothProgress, [0, 0.5, 1], [45, 0, -45]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <div style={{ perspective: "1000px" }} className="w-full flex justify-center mb-20 pointer-events-none z-10">
      <motion.h2
        ref={ref}
        style={{ y, rotateX, scale, opacity, transformOrigin: "center center" }}
        className={`text-5xl md:text-[7rem] font-black uppercase tracking-tighter text-center text-white drop-shadow-2xl ${className}`}
      >
        {children}
      </motion.h2>
    </div>
  );
}

// --- COMPONENTE PRINCIPAL ---

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <main className="relative bg-[#050505] text-neutral-50 font-sans selection:bg-white/20 overflow-x-hidden">
      
      {/* FUNDO ANIMADO TRANQUILO */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ backgroundPosition: ["0px 0px", "64px 64px"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"
        />
        
        <motion.div
          animate={{ x: [0, 100, -50, 0], y: [0, -100, 50, 0], scale: [1, 1.2, 0.9, 1] }}
          transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
          className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-cyan-900/10 blur-[150px] rounded-full"
        />

        <motion.div
          animate={{ x: [0, -150, 80, 0], y: [0, 120, -80, 0], scale: [1, 0.8, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 30, ease: "easeInOut" }}
          className="absolute bottom-[10%] right-[10%] w-[700px] h-[700px] bg-indigo-900/10 blur-[150px] rounded-full"
        />
      </div>

{/* 1. HERO SECTION */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.9 }} 
          animate={{ opacity: 1, y: 0, scale: 1 }} 
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="z-10 flex max-w-3xl flex-col items-center text-center"
        >
          <h1 className="mb-6 text-6xl md:text-8xl font-black uppercase tracking-tighter text-white drop-shadow-lg">
            Flávio<br/>Rodrigues
          </h1>
          <p className="mb-8 text-xl text-neutral-300 sm:text-2xl font-light tracking-wide bg-neutral-900/50 px-6 py-2 rounded-full border border-neutral-800 backdrop-blur-sm">
            Informatics Engineer & Web Developer
          </p>
          <p className="mb-10 max-w-xl text-neutral-400 sm:text-lg leading-relaxed">
            Focused on solving problems through AI integration and developing optimized web solutions. Building the digital future from Braga, Portugal.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            
            {/* NOVO BOTÃO DE SCROLL RÁPIDO */}
            <button 
              onClick={(e) => {
                e.preventDefault();
                const section = document.getElementById("projects");
                if (section) {
                  const y = section.getBoundingClientRect().top + window.scrollY;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              className="group flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-black transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
            >
              View Projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
            </button>

            <div className="flex gap-5 px-4 border-l border-neutral-800 pl-6">
              <a href="https://github.com/FlavioRodrigues" target="_blank" className="text-neutral-500 hover:text-white transition-all hover:scale-110"><FaGithub className="h-6 w-6" /></a>
              <a href="https://linkedin.com/" target="_blank" className="text-neutral-500 hover:text-white transition-all hover:scale-110"><FaLinkedin className="h-6 w-6" /></a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. TECH STACK */}
      <section id="skills" className="py-32 px-4 max-w-5xl mx-auto relative z-10">
        <AnimatedTitle>Tech Stack</AnimatedTitle>
        
        <div className="relative z-10 bg-[#0a0a0a]/60 backdrop-blur-xl p-8 rounded-3xl border border-neutral-900 shadow-2xl">
          <h3 className="text-xl font-bold mb-8 text-white">Comfortable</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4 mb-16">
            {SKILLS.comfortable.map((skill, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -5 }}
                className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-[#111]/80 border border-neutral-800 hover:border-cyan-500/50 transition-colors cursor-pointer"
              >
                <div className="text-4xl drop-shadow-md">{skill.icon}</div>
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-300">{skill.name}</span>
              </motion.div>
            ))}
          </div>

          <h3 className="text-xl font-bold mb-8 text-neutral-500">Learning</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 opacity-70">
            {SKILLS.learning.map((skill, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -5 }}
                className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-[#111]/80 border border-neutral-800 hover:border-neutral-600 transition-colors cursor-pointer"
              >
                <div className="text-4xl">{skill.icon}</div>
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. EXPERIENCE */}
      <section id="experience" className="py-32 px-4 relative z-10">
        <div className="max-w-4xl mx-auto relative z-10">
          <AnimatedTitle>Experience</AnimatedTitle>
          <div className="space-y-8 relative z-20">
            {EXPERIENCE.map((exp, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.5 }}
                className="p-8 md:p-10 rounded-3xl bg-[#0a0a0a]/60 backdrop-blur-xl border border-neutral-900 hover:border-cyan-900/50 transition-colors"
              >
                <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-black text-white mb-1">{exp.title}</h3>
                    <p className="text-cyan-500 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-neutral-400 text-xs font-bold tracking-widest uppercase bg-[#111] px-4 py-2 rounded-full border border-neutral-800">{exp.date}</span>
                </div>
                <p className="text-neutral-400 mb-8 leading-relaxed font-light">{exp.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t, j) => (
                    <span key={j} className="px-4 py-2 text-xs font-bold rounded-lg bg-[#111] text-neutral-300 border border-neutral-800">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROJECTS */}
      <section id="projects" className="py-32 px-4 max-w-6xl mx-auto min-h-screen flex flex-col justify-center relative z-10">
        <AnimatedTitle>Projects</AnimatedTitle>
        <div className="grid md:grid-cols-2 gap-8 relative z-10" style={{ perspective: "1500px" }}>
          {PROJECTS.map((proj) => (
            <motion.div 
              key={proj.id} 
              initial={{ opacity: 0, rotateX: 20, y: 50 }} 
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }} 
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.02, rotateY: -2, rotateX: 2 }} 
              transition={{ duration: 0.6 }}
              onClick={() => setSelectedProject(proj)}
              className="group cursor-pointer rounded-3xl overflow-hidden bg-[#0a0a0a]/80 backdrop-blur-xl border border-neutral-900 hover:border-cyan-500/30"
            >
              <div className="aspect-video bg-[#111] relative overflow-hidden">
                <img src={proj.screenshots[0]} alt={proj.title} className="object-cover w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-8 left-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-xs font-bold px-3 py-1 bg-white text-black rounded-md mb-4 inline-block">{proj.category}</span>
                  <h3 className="text-3xl font-black text-white drop-shadow-lg">{proj.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

{/* 5. CONTACT */}
      <section id="contact" className="relative py-40 px-4 flex flex-col items-center justify-center overflow-hidden min-h-screen z-10">
        
        <div className="w-full max-w-5xl relative z-10 flex flex-col md:flex-row items-center gap-12">
          
          <div className="md:w-1/2 w-full relative pointer-events-none">
             <AnimatedTitle className="!text-left md:!text-[8rem] leading-[0.85] !mb-0 hidden md:block !text-white opacity-20">
               Let's<br/>Work<br/>Together
             </AnimatedTitle>
             <h2 className="text-6xl font-black uppercase text-center md:hidden mb-10 text-white opacity-20">Let's Work Together</h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:w-1/2 w-full bg-[#0a0a0a]/60 backdrop-blur-2xl border border-neutral-800 p-8 md:p-10 rounded-3xl relative z-20 shadow-2xl"
          >
            <h3 className="text-3xl font-bold text-white mb-2">Contact</h3>
            <p className="text-neutral-500 text-sm mb-10 font-light">
              Send an email to <a href="mailto:flaviorodrigues.dev@gmail.com" className="text-cyan-500 hover:text-cyan-400 font-medium">flaviorodrigues.dev@gmail.com</a>
            </p>

            <form 
              className="space-y-6" 
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const formData = new FormData(form);
                
                const name = formData.get('name');
                const email = formData.get('email');
                const message = formData.get('message');

                // Formata o assunto e o corpo do email
                const subject = encodeURIComponent(`Novo contacto do Portefólio - ${name}`);
                const body = encodeURIComponent(`${message}\n\n---\nEnviado por: ${name}\nEmail de contacto: ${email}`);

                // Abre a aplicação de email do utilizador
                window.location.href = `mailto:flaviorodrigues.dev@gmail.com?subject=${subject}&body=${body}`;
              }}
            >
              <div className="flex flex-col gap-6">
                <div className="flex-1 space-y-3">
                  <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Name</label>
                  <input type="text" name="name" required placeholder="Your Name" className="w-full bg-[#111]/80 border border-neutral-800 rounded-xl px-5 py-4 text-white placeholder:text-neutral-700 focus:outline-none focus:border-cyan-500 transition-all" />
                </div>
                <div className="flex-1 space-y-3">
                  <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Email</label>
                  <input type="email" name="email" required placeholder="you@example.com" className="w-full bg-[#111]/80 border border-neutral-800 rounded-xl px-5 py-4 text-white placeholder:text-neutral-700 focus:outline-none focus:border-cyan-500 transition-all" />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Message</label>
                <textarea name="message" required placeholder="How can I help you?" rows={4} className="w-full bg-[#111]/80 border border-neutral-800 rounded-xl px-5 py-4 text-white placeholder:text-neutral-700 focus:outline-none focus:border-cyan-500 transition-all resize-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-white hover:bg-cyan-500 text-black hover:text-white font-black uppercase tracking-widest py-5 rounded-xl flex items-center justify-center gap-3 transition-all group mt-8">
                Send Email <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* MODAL DE PROJETO (POP-UP) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050505]/95 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.95 }} 
              animate={{ y: 0, opacity: 1, scale: 1 }} 
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} 
              className="bg-[#0a0a0a] border border-neutral-900 rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-y-auto"
            >
              <div className="sticky top-0 bg-[#0a0a0a]/90 backdrop-blur-xl p-6 md:px-10 border-b border-neutral-900 flex justify-between items-center z-10">
                <div>
                  <span className="text-neutral-500 font-bold text-xs tracking-widest uppercase">{selectedProject.category}</span>
                  <h3 className="text-2xl md:text-3xl font-black text-white">{selectedProject.title}</h3>
                </div>
                <button onClick={() => setSelectedProject(null)} className="p-3 bg-[#111] rounded-full hover:bg-neutral-800 transition-colors">
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
              
              <div className="p-6 md:p-10">
                <div className="flex flex-wrap gap-4 mb-12">
                  {selectedProject.live && (
                    <a href={selectedProject.live} target="_blank" className="flex items-center gap-2 bg-white hover:bg-neutral-200 text-black px-6 py-3 rounded-xl font-bold transition-all hover:scale-105">
                      <ExternalLink className="w-5 h-5" /> Visit Live
                    </a>
                  )}
                  {selectedProject.github && (
                    <a href={selectedProject.github} target="_blank" className="flex items-center gap-2 bg-[#111] border border-neutral-800 hover:bg-neutral-800 text-white px-6 py-3 rounded-xl font-bold transition-all hover:scale-105">
                      <FaGithub className="w-5 h-5" /> Source Code
                    </a>
                  )}
                </div>

                <p className="text-neutral-400 text-lg md:text-xl leading-relaxed mb-12 font-light">{selectedProject.desc}</p>
                
                <h4 className="font-bold text-xs uppercase tracking-widest text-neutral-600 mb-5">Core Technologies</h4>
                <div className="flex flex-wrap gap-3 mb-16">
                  {selectedProject.tech.map((t: string, i: number) => (
                    <span key={i} className="px-4 py-2 bg-[#111] border border-neutral-800 rounded-lg text-sm font-bold text-white">{t}</span>
                  ))}
                </div>

                <h4 className="font-bold text-xs uppercase tracking-widest text-neutral-600 mb-6">Project Gallery</h4>
                <div className="space-y-6">
                  {selectedProject.screenshots.map((img: string, i: number) => (
                    <img key={i} src={img} alt={`Screenshot ${i + 1}`} className="w-full rounded-2xl border border-neutral-900" />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
