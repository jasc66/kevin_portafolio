"use client"
import { Github, Linkedin, Mail, MapPin, Phone, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import ScrollToSection from "@/components/scroll-to-section"
import SectionTransition from "@/components/section-transition"
import Header from "@/components/header"
import BackgroundImage from "@/components/background-image"
import DownloadCVButton from "@/components/download-cv-button"
import Image from "next/image"

// Import the lazy components
import { LazyProjectsSection, LazyContactForm, LazyLoadComponent } from "@/components/lazy-components"
import ExperienceCard from "@/components/experience-card"
import EducationCard from "@/components/education-card"

// Import data directly from individual files
import { experiences } from "@/data/experience"
import { educationItems } from "@/data/education"
import { certificationItems } from "@/data/certifications"
import { technicalSkills } from "@/data/skills"

// Constants
const CV_URL = "/Kevin_Ilama_Portuguez_CV.pdf"
const PROFILE_IMAGE =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kevin.jpg-3FZmo8zITF2rYiuzWowplqrp7wcuHh.jpeg"
const CONTACT_INFO = {
  email: "ilamaportuguezkevin98@gmail.com",
  phone: "87666776",
  location: "San Jose, Pérez Zeledón, Costa Rica",
  linkedin: "https://www.linkedin.com/in/kevin-ilama-portuguez-852239226/",
  whatsapp: "https://wa.me/50687666776",
}

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Fixed background image */}
      <BackgroundImage />

      <ScrollToSection />
      <SectionTransition />
      <Header />

      {/* Content that scrolls over the background */}
      <main id="main-content" className="pt-20 relative z-10">
        {/* Hero Section */}
        <section className="py-12 md:py-20 relative" aria-labelledby="hero-heading">
          <div className="container mx-auto px-4 relative z-10 pt-8 md:pt-0">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/3 flex justify-center">
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <Image
                    src={PROFILE_IMAGE || "/placeholder.svg"}
                    alt="Kevin Ilama Portuguez"
                    fill
                    className="object-cover"
                    priority
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmOGY5ZmEiLz48L3N2Zz4="
                    sizes="(max-width: 768px) 192px, 256px"
                    loading="eager"
                  />
                </div>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h1 id="hero-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                  Kevin Ilama Portuguez
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-primary mb-6">Data Engineer</h2>
                <p className="text-base md:text-lg text-slate-800 mb-8 max-w-2xl mx-auto md:mx-0">
                  Dedicated and meticulous professional with experience across diverse fields such as customer service,
                  collecting requirements based on the client's specifications and deliver solutions. Technology
                  enthusiast in a continuous improvement development path.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
                  <Button variant="default" className="bg-primary hover:bg-primary/90" asChild>
                    <a href="#contact">Contact Me</a>
                  </Button>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
                    <a href="#experience">View Experience</a>
                  </Button>
                </div>
                <div className="flex justify-center md:justify-start">
                  <DownloadCVButton cvUrl={CV_URL} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 relative" aria-labelledby="about-heading">
          <div className="absolute inset-0 bg-slate-100/70"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 id="about-heading" className="text-3xl font-bold text-slate-900 mb-12 text-center">
              About Me
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-slate-800 mb-6">
                I'm a Data Engineer with expertise in designing and implementing data solutions that drive business
                insights and decision-making. My experience spans across financial institutions and technical
                consulting, where I've developed robust ETL processes, optimized database performance, and created
                impactful reporting solutions.
              </p>
              <p className="text-lg text-slate-800 mb-6">
                I specialize in SQL development, Power BI reporting, and data integration, with a strong focus on data
                quality and performance optimization. My approach combines technical expertise with a deep understanding
                of business needs to deliver solutions that make a real impact.
              </p>
              <div className="flex flex-wrap gap-4 mt-8 justify-center">
                <div className="flex items-center gap-2 text-slate-800">
                  <MapPin size={18} className="text-primary" aria-hidden="true" />
                  <span>{CONTACT_INFO.location}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-800">
                  <Mail size={18} className="text-primary" aria-hidden="true" />
                  <span>{CONTACT_INFO.email}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-800">
                  <Phone size={18} className="text-primary" aria-hidden="true" />
                  <span>{CONTACT_INFO.phone}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 relative" aria-labelledby="experience-heading">
          <div className="absolute inset-0 bg-slate-100/80"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 id="experience-heading" className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Professional Experience
            </h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {experiences.map((exp) => (
                <ExperienceCard
                  key={exp.id}
                  title={exp.title}
                  company={exp.company}
                  period={exp.period}
                  focus={exp.focus}
                  responsibilities={exp.responsibilities}
                  bgColor={exp.bgColor}
                  icon={exp.icon}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 relative" aria-labelledby="skills-heading">
          <div className="absolute inset-0 bg-slate-100/70"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 id="skills-heading" className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Technical Skills
            </h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {technicalSkills.map((skillGroup, groupIndex) => (
                <div key={groupIndex} className="space-y-6 bg-white/90 shadow-md p-6 rounded-lg">
                  {skillGroup.map((skill) => (
                    <div key={skill.id}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-slate-900">{skill.name}</span>
                        <span className="text-sm text-slate-800">{skill.percentage}%</span>
                      </div>
                      <Progress
                        value={skill.percentage}
                        className="h-2 progress-value"
                        aria-label={`${skill.name} skill level: ${skill.percentage}%`}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 relative" aria-labelledby="education-heading">
          <div className="absolute inset-0 bg-white/90"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 id="education-heading" className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Education & Certifications
            </h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <EducationCard
                type="education"
                items={educationItems}
                bgColor="bg-gradient-to-br from-teal-500/80 to-teal-400/40"
                icon="🎓"
              />
              <EducationCard
                type="certification"
                items={certificationItems}
                bgColor="bg-gradient-to-br from-purple-500/80 to-purple-400/40"
                icon="🏆"
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 relative" aria-labelledby="projects-heading">
          <div className="absolute inset-0 bg-slate-100/70"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 id="projects-heading" className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Featured Projects
            </h2>
            <LazyLoadComponent>
              <LazyProjectsSection />
            </LazyLoadComponent>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 relative" aria-labelledby="contact-heading">
          <div className="absolute inset-0 bg-white/90"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 id="contact-heading" className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Get In Touch
            </h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative rounded-lg shadow-lg overflow-hidden bg-primary/10 border border-primary/20">
                <div className="absolute top-0 left-0 h-full w-12 bg-primary/20 flex items-center justify-center">
                  <p className="text-primary font-semibold text-lg tracking-widest transform -rotate-90 whitespace-nowrap">
                    My Details
                  </p>
                </div>

                <div className="p-8 pl-16">
                  <h3 className="text-xl font-medium text-slate-900 mb-6">Contact Information</h3>

                  <div className="space-y-5">
                    <div className="border-b-2 border-primary/20 pb-4">
                      <p className="text-sm font-medium text-slate-800 mb-1">Email</p>
                      <div className="flex items-center gap-2">
                        <Mail size={16} className="text-primary" aria-hidden="true" />
                        <a
                          href={`mailto:${CONTACT_INFO.email}`}
                          className="text-slate-900 hover:text-primary transition-colors"
                        >
                          {CONTACT_INFO.email}
                        </a>
                      </div>
                    </div>

                    <div className="border-b-2 border-primary/20 pb-4">
                      <p className="text-sm font-medium text-slate-800 mb-1">Phone</p>
                      <div className="flex items-center gap-2">
                        <Phone size={16} className="text-primary" aria-hidden="true" />
                        <a
                          href={`tel:${CONTACT_INFO.phone}`}
                          className="text-slate-900 hover:text-primary transition-colors"
                        >
                          {CONTACT_INFO.phone}
                        </a>
                      </div>
                    </div>

                    <div className="border-b-2 border-primary/20 pb-4">
                      <p className="text-sm font-medium text-slate-800 mb-1">WhatsApp</p>
                      <div className="flex items-center gap-2">
                        <MessageSquare size={16} className="text-primary" aria-hidden="true" />
                        <a
                          href={CONTACT_INFO.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-900 hover:text-primary transition-colors"
                        >
                          Chat on WhatsApp
                        </a>
                      </div>
                    </div>

                    <div className="border-b-2 border-primary/20 pb-4">
                      <p className="text-sm font-medium text-slate-800 mb-1">Location</p>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-primary" aria-hidden="true" />
                        <p className="text-slate-900">{CONTACT_INFO.location}</p>
                      </div>
                    </div>

                    <div className="border-b-2 border-primary/20 pb-4">
                      <p className="text-sm font-medium text-slate-800 mb-1">LinkedIn</p>
                      <div className="flex items-center gap-2">
                        <Linkedin size={16} className="text-primary" aria-hidden="true" />
                        <a
                          href={CONTACT_INFO.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-900 hover:text-primary transition-colors"
                        >
                          Kevin Ilama
                        </a>
                      </div>
                    </div>

                    <div className="pt-2">
                      <a
                        href={CONTACT_INFO.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-primary text-primary rounded-md hover:bg-primary/5 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
                      >
                        <span>View Profile</span>
                        <Linkedin size={16} aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <LazyLoadComponent>
                <LazyContactForm />
              </LazyLoadComponent>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-slate-900 text-white" role="contentinfo">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-white">© {new Date().getFullYear()} Kevin Ilama Portuguez. All rights reserved.</p>
              </div>
              <div className="flex space-x-4">
                <a
                  href={CONTACT_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary transition"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} aria-hidden="true" />
                </a>
                <a href="#" className="text-white hover:text-primary transition" aria-label="GitHub Profile">
                  <Github size={20} aria-hidden="true" />
                </a>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-white hover:text-primary transition"
                  aria-label="Email Me"
                >
                  <Mail size={20} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

