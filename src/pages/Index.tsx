import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import {
  Mail,
  FileText,
  Github,
  Linkedin,
  ChevronDown,
  GraduationCap,
  MapPin,
  Phone,
  Moon,
  Sun
} from "lucide-react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    setIsVisible(true);
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToContent = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const contactInfo = {
    email: "kefeisu@gmail.com",
    phone: "+1 819-955-1448",
    location: "Ottawa, Canada",
    github: "kefeisu",
    linkedin: "kefeisu"
  };

  const skills = {
    languages: ['Golang', 'Java', 'Python', 'Javascript', 'Bash', 'SQL', 'HTML'],
    technologies: ['Docker', 'Redis', 'Terraform', 'Github Actions', 'Jenkins', 'Ansible', 'Spring Boot'],
    platforms: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Datadog']
  };

  return (
    <div className="min-h-screen">
      {/* Theme Toggle Button */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          variant="outline"
          size="icon"
          className="glass-card"
          onClick={toggleTheme}
        >
          {theme === 'light' ? (
            <Moon className="h-4 w-4" />
          ) : (
            <Sun className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-4">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden glass-card p-1">
              <img
                src="/placeholder.svg"
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">KEFEI SU</h1>
            <p className="text-secondary text-lg mb-4">Senior Software Developer</p>
            <div className="flex flex-wrap gap-2 justify-center mb-8 text-sm text-secondary">
              <span className="flex items-center">
                <Phone className="w-4 h-4 mr-1" />
                {contactInfo.phone}
              </span>
              <span className="flex items-center">
                <Mail className="w-4 h-4 mr-1" />
                {contactInfo.email}
              </span>
              <span className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {contactInfo.location}
              </span>
            </div>
            <div className="flex gap-4 justify-center mb-12">
              <Button variant="outline" className="glass-card">
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </Button>
              <Button variant="outline" className="glass-card">
                <FileText className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ delay: 0.8, duration: 0.3 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
            onClick={scrollToContent}
          >
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline-container">
          <div className="experience-card">
            <div className="timeline-dot" />
            <h3 className="text-xl font-semibold mb-2">Senior Software Developer</h3>
            <p className="text-secondary mb-2">Arctic Wolf • June 2021 - Present</p>
            <ul className="text-sm leading-relaxed list-disc ml-4 space-y-2">
              <li>Led the modular client architecture redesign that shipped to over 2 million clients across international regions</li>
              <li>Delivered language agnostic client features in Golang that enabled product expansion into Germany</li>
              <li>Created and maintained RESTful APIs to develop crucial agent platform functionality using Golang, Kubernetes and Postgres</li>
              <li>Developed automated pipelines in GitHub Actions to patch CVE's and release new vulnerability scanning software from AWS S3 buckets</li>
              <li>Recruited and mentored new hires to scale the team from 10 to 30 members</li>
            </ul>
          </div>

          <div className="experience-card">
            <div className="timeline-dot" />
            <h3 className="text-xl font-semibold mb-2">Backend & DevOps Developer</h3>
            <p className="text-secondary mb-2">Solace • May 2019 - June 2021</p>
            <ul className="text-sm leading-relaxed list-disc ml-4 space-y-2">
              <li>Redesigned entire monitoring stack by leading the adoption of Datadog and simplifying technologies used</li>
              <li>Managed the deployment of Datadog agents across production systems to monitor thousands of AWS EC2s, Azure VMs and k8s clusters</li>
              <li>Designed, built and maintained RESTful backend microservices for 'Solace Insights' feature using Java, Spring Boot, Hibernate, Redis and MySQL</li>
              <li>Modularized Jenkins jobs and Ansible Playbooks, reducing weekly deployment downtime from 2hrs to under 30mins to help achieve CI/CD</li>
            </ul>
          </div>

          <div className="experience-card">
            <div className="timeline-dot" />
            <h3 className="text-xl font-semibold mb-2">Software Architect Intern</h3>
            <p className="text-secondary mb-2">Solace • January 2019 - April 2019</p>
            <ul className="text-sm leading-relaxed list-disc ml-4 space-y-2">
              <li>Designed and deployed on-premise Vault cluster with Consul backend in k8s rancher to securely store secrets</li>
              <li>Improved design of HA infrastructure in Azure using availability sets, allowing HA support in over a dozen new Azure Regions</li>
            </ul>
          </div>

          <div className="experience-card">
            <div className="timeline-dot" />
            <h3 className="text-xl font-semibold mb-2">Backend Developer Intern</h3>
            <p className="text-secondary mb-2">Nuance • September 2018 - December 2018</p>
            <ul className="text-sm leading-relaxed list-disc ml-4 space-y-2">
              <li>Unblocked the migration of MIX onto Azure by redesigning database schemas to eliminate BLOB incompatibilities</li>
              <li>Created REST endpoint in Java (Jersey) allowing customers to create and run projects on Nuance's MIX Platform</li>
              <li>Developed new commands for MIX's CLI in Python</li>
            </ul>
          </div>

          <div className="experience-card">
            <div className="timeline-dot" />
            <h3 className="text-xl font-semibold mb-2">Software Developer Intern</h3>
            <p className="text-secondary mb-2">BlackBerry • January 2018 - April 2018</p>
            <ul className="text-sm leading-relaxed list-disc ml-4 space-y-2">
              <li>Processed, aggregated and summarized Android log data to monitor the performance and battery life of in-development Blackberry phones</li>
              <li>Reduced load time of webpages by restructuring legacy project and converting server-side Python scripts</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-container">
        <h2 className="section-title">Education</h2>
        <div className="glass-card p-6 rounded-lg mb-8">
          <div className="flex items-start gap-4">
            <GraduationCap className="w-6 h-6 mt-1" />
            <div>
              <h3 className="text-xl font-semibold">University of Waterloo</h3>
              <p className="text-secondary">Bachelor of Computer Science • 2015 - 2019</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-container">
        <h2 className="section-title">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="glass-card p-6 rounded-lg">
            <h3 className="font-semibold mb-4">Programming Languages</h3>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-secondary/10 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="glass-card p-6 rounded-lg">
            <h3 className="font-semibold mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {skills.technologies.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-secondary/10 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="glass-card p-6 rounded-lg">
            <h3 className="font-semibold mb-4">Platforms & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {skills.platforms.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-secondary/10 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-container">
        <h2 className="section-title">Contact</h2>
        <div className="flex justify-center gap-4">
          <Button variant="outline" className="glass-card" onClick={() => window.open(`https://github.com/${contactInfo.github}`, '_blank')}>
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
          <Button variant="outline" className="glass-card" onClick={() => window.open(`https://linkedin.com/in/${contactInfo.linkedin}`, '_blank')}>
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </Button>
          <Button variant="outline" className="glass-card" onClick={() => window.location.href = `mailto:${contactInfo.email}`}>
            <Mail className="mr-2 h-4 w-4" />
            Email
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
