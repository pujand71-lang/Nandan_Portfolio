/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Code2, 
  Briefcase, 
  GraduationCap, 
  User, 
  ChevronRight,
  Terminal,
  Cpu,
  Globe,
  Database
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const Section = ({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className={cn("py-20 px-6 max-w-5xl mx-auto", className)}
  >
    {children}
  </motion.section>
);

const SkillBadge = ({ name, icon: Icon }: { name: string; icon?: React.ElementType; key?: string | number }) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border hover:bg-secondary transition-colors"
  >
    {Icon && <Icon size={14} className="text-primary" />}
    <span className="text-sm font-medium">{name}</span>
  </motion.div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.05], [1, 0.95]);

  const skills = {
    languages: ["Java", "Python", "C", "SQL"],
    frontend: ["HTML5", "CSS3", "JavaScript", "React.js", "Responsive Design", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "REST APIs"],
    tools: ["MongoDB", "Git", "GitHub", "Vite", "VS Code"]
  };

  const projects = [
    {
      title: "Portfolio Website",
      tech: ["HTML", "CSS", "JavaScript", "React", "Motion"],
      description: "Developed a responsive personal portfolio showcasing technical projects with mobile-first styling and smooth animations.",
      link: "#"
    },
    {
      title: "To-Do List Application",
      tech: ["HTML", "CSS", "JavaScript", "Local Storage"],
      description: "Created an interactive task manager with Local Storage persistence and a clean UI supporting full CRUD workflows.",
      link: "#"
    },
    {
      title: "Weather Application",
      tech: ["JavaScript", "REST API", "OpenWeather"],
      description: "Integrated external weather API to display real-time data dynamically based on user location or search.",
      link: "#"
    }
  ];

  const experience = [
    {
      role: "Web Developer Intern",
      company: "SR DREAM IT",
      period: "Jul 2025 – Aug 2025",
      points: [
        "Built responsive UI components using HTML, CSS, and JavaScript.",
        "Integrated frontend modules with REST APIs for dynamic content rendering.",
        "Improved cross-device usability using mobile-first design principles.",
        "Collaborated using Git-based version control workflows."
      ]
    }
  ];

  const education = [
    {
      degree: "B.E. Computer Science",
      institution: "KPR Institute of Engineering and Technology",
      period: "2023 – 2027",
      grade: "CGPA: 7.78 / 10"
    },
    {
      degree: "Higher Secondary School Certificate (HSC)",
      institution: "Chittagong Collegiate School",
      period: "2020 – 2022",
      grade: "GPA: 5.00 / 5.00"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-lg font-bold tracking-tighter"
          >
            NANDAN.DEV
          </motion.span>
          <div className="flex gap-6 text-sm font-medium text-muted-foreground">
            {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="hover:text-foreground transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        style={{ opacity, scale }}
        className="h-screen flex flex-col items-center justify-center text-center px-6 relative"
      >
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/50 text-primary">
            Available for Internships
          </Badge>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 bg-gradient-to-b from-foreground to-foreground/50 bg-clip-text text-transparent">
            Nandan Das Gupta
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 font-medium">
            Software Engineer crafting responsive web applications with a focus on performance and user experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="rounded-full px-8" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </motion.section>

      {/* About Section */}
      <Section id="about">
        <div className="flex items-center gap-4 mb-8">
          <User className="text-primary" size={28} />
          <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I am a Software Engineering undergraduate with a strong foundation in full-stack development. 
              My passion lies in building scalable, user-centric applications using modern technologies like 
              React, Node.js, and MongoDB.
            </p>
            <p>
              With hands-on experience from industry internships and personal projects, I've developed a 
              keen eye for clean code and responsive design. I thrive in collaborative environments and 
              am always eager to learn and implement new technologies.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all">
                <Linkedin size={20} />
              </a>
              <a href="mailto:pujand71@gmail.com" className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>
          <Card className="bg-secondary/30 border-none">
            <CardHeader>
              <CardTitle className="text-sm uppercase tracking-wider text-muted-foreground">Quick Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Location</span>
                <span className="font-medium">India</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Role</span>
                <span className="font-medium">Software Engineer</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Languages</span>
                <span className="font-medium">English, Bengali, Hindi</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" className="bg-secondary/10">
        <div className="flex items-center gap-4 mb-12">
          <Code2 className="text-primary" size={28} />
          <h2 className="text-3xl font-bold tracking-tight">Technical Skills</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
              <Terminal size={14} /> Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map(s => <SkillBadge key={s} name={s} />)}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
              <Globe size={14} /> Frontend
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.map(s => <SkillBadge key={s} name={s} />)}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
              <Cpu size={14} /> Backend
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.backend.map(s => <SkillBadge key={s} name={s} />)}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
              <Database size={14} /> Database & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map(s => <SkillBadge key={s} name={s} />)}
            </div>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience">
        <div className="flex items-center gap-4 mb-12">
          <Briefcase className="text-primary" size={28} />
          <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
        </div>
        <div className="space-y-12">
          {experience.map((exp, i) => (
            <div key={i} className="relative pl-8 border-l border-border">
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-primary" />
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                {exp.points.map((p, j) => (
                  <li key={j} className="flex gap-2">
                    <ChevronRight size={18} className="text-primary shrink-0 mt-1" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" className="bg-secondary/10">
        <div className="flex items-center gap-4 mb-12">
          <Globe className="text-primary" size={28} />
          <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full bg-background border-border/50 hover:border-primary/50 transition-colors group">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div className="p-2 rounded-lg bg-secondary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Code2 size={20} />
                    </div>
                    <a href={project.link} className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education">
        <div className="flex items-center gap-4 mb-12">
          <GraduationCap className="text-primary" size={28} />
          <h2 className="text-3xl font-bold tracking-tight">Education</h2>
        </div>
        <div className="grid gap-8">
          {education.map((edu, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl bg-secondary/30 border border-border/50">
              <div>
                <h3 className="text-lg font-bold">{edu.degree}</h3>
                <p className="text-muted-foreground">{edu.institution}</p>
                <p className="text-primary font-medium mt-1">{edu.grade}</p>
              </div>
              <span className="text-sm font-medium text-muted-foreground mt-4 md:mt-0">
                {edu.period}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="mb-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground text-lg mb-10">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button size="lg" variant="outline" className="h-16 rounded-2xl flex items-center gap-4 justify-start px-6 group" asChild>
              <a href="mailto:pujand71@gmail.com">
                <div className="p-2 rounded-full bg-secondary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail size={20} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Email Me</p>
                  <p className="text-sm font-medium">pujand71@gmail.com</p>
                </div>
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-16 rounded-2xl flex items-center gap-4 justify-start px-6 group" asChild>
              <a href="tel:+919677840299">
                <div className="p-2 rounded-full bg-secondary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Phone size={20} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Call Me</p>
                  <p className="text-sm font-medium">+91 9677840299</p>
                </div>
              </a>
            </Button>
          </div>
          <div className="flex justify-center gap-8 mt-12">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
              <Linkedin size={20} /> LinkedIn
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
              <Github size={20} /> GitHub
            </a>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-10 border-t border-border/40 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Nandan Das Gupta. Built with React & Motion.
        </p>
      </footer>
    </div>
  );
}
