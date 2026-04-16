"use client"
import { Suspense, useEffect, useState } from "react"
import { Github, Linkedin, Mail, MapPin, Phone, MessageSquare, ArrowRight, Database, BarChart3, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollToSection from "@/components/scroll-to-section"
import SectionTransition from "@/components/section-transition"
import Header from "@/components/header"
import BackgroundImage from "@/components/layout/background-image"
import DownloadCVButton from "@/components/buttons/download-cv-button"
import Image from "next/image"
import SkillBar from "@/components/skills/skill-bar"
import { motion } from "motion/react"
import { ContainerScroll } from "@/components/ui/container-scroll-animation"

// Import the lazy components
import { LazyContactForm, LazyLoadComponent } from "@/components/lazy-components"
import ExperienceCard from "@/components/experience-card"
import EducationCard from "@/components/education-card"
import { ContactItem } from "@/components/contact/contact-item"
import SkeletonProjects from "@/components/skeletons/skeleton-projects"

// Import data directly from individual files
import { experiences } from "@/data/experience"
import { educationItems } from "@/data/education"
import { certificationItems } from "@/data/certifications"
import { technicalSkills } from "@/data/skills"
import { SITE_CONFIG } from "@/constants/site-config"

// Dynamic import for ProjectsSection
import dynamic from "next/dynamic"
const ProjectsSection = dynamic(() => import("@/components/projects-section"), {
  loading: () => <SkeletonProjects />,
  ssr: false,
})

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => { setIsLoaded(true) }, [])

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
        <section className="relative overflow-x-hidden" aria-labelledby="hero-heading">
          {/* Animated gradient blobs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isLoaded ? { opacity: 0.25, scale: 1 } : {}}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="absolute top-10 right-10 w-72 h-72 rounded-full bg-primary/40 blur-[100px] pointer-events-none"
            aria-hidden="true"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isLoaded ? { opacity: 0.2, scale: 1 } : {}}
            transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
            className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-teal-400/30 blur-[120px] pointer-events-none"
            aria-hidden="true"
          />

          <ContainerScroll
            titleComponent={
              <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-10 mb-8">
                  {/* Profile Image */}
                  <motion.div
                    className="md:w-1/3 flex justify-center"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  >
                    <div className="relative">
                      <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-primary via-blue-400 to-teal-400 blur-sm opacity-70 animate-gradient" aria-hidden="true" />
                      <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                        <Image
                          src={SITE_CONFIG.images.profile || "/placeholder.svg"}
                          alt={`${SITE_CONFIG.name}, ${SITE_CONFIG.title}, professional headshot`}
                          fill
                          className="object-cover"
                          priority={true}
                          quality={85}
                          placeholder="blur"
                          blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmOGY5ZmEiLz48L3N2Zz4="
                          sizes="(max-width: 768px) 192px, 256px"
                        />
                      </div>
                      {/* Availability badge */}
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 bg-white rounded-full shadow-lg border border-slate-100 whitespace-nowrap">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                        </span>
                        <span className="text-xs font-medium text-slate-700">Available for opportunities</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Text Content */}
                  <div className="md:w-2/3 text-center md:text-left">
                    {/* Tech stack badges */}
                    <motion.div
                      className="flex flex-wrap gap-2 justify-center md:justify-start mb-5"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                    >
                      {[
                        { icon: Database, label: "SQL & ETL" },
                        { icon: BarChart3, label: "Power BI" },
                        { icon: Code2, label: "Data Engineering" },
                      ].map(({ icon: Icon, label }) => (
                        <span key={label} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                          <Icon size={12} aria-hidden="true" />
                          {label}
                        </span>
                      ))}
                    </motion.div>

                    <motion.h1
                      id="hero-heading"
                      className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3"
                      initial={{ opacity: 0, y: 25 }}
                      animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
                    >
                      {SITE_CONFIG.name}
                    </motion.h1>

                    <motion.h2
                      className="text-xl md:text-2xl lg:text-3xl font-medium text-primary mb-5"
                      initial={{ opacity: 0, y: 25 }}
                      animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
                    >
                      {SITE_CONFIG.title}
                    </motion.h2>

                    <motion.p
                      className="text-base md:text-lg text-slate-700 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed"
                      initial={{ opacity: 0, y: 25 }}
                      animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
                    >
                      Dedicated and meticulous professional with experience across diverse fields such as customer service,
                      collecting requirements based on the client's specifications and deliver solutions. Technology
                      enthusiast in a continuous improvement development path.
                    </motion.p>

                    <motion.div
                      className="flex flex-wrap gap-4 justify-center md:justify-start mb-6"
                      initial={{ opacity: 0, y: 25 }}
                      animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
                    >
                      <Button variant="default" className="bg-primary hover:bg-primary/90 group" asChild>
                        <a href="#contact" className="inline-flex items-center gap-2">
                          Contact Me
                          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                        </a>
                      </Button>
                      <Button variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
                        <a href="#experience">View Experience</a>
                      </Button>
                    </motion.div>

                    <motion.div
                      className="flex justify-center md:justify-start"
                      initial={{ opacity: 0, y: 25 }}
                      animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.65, ease: "easeOut" }}
                    >
                      <DownloadCVButton />
                    </motion.div>
                  </div>
                </div>
              </div>
            }
          >
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
              alt="Data analytics dashboard showing charts and metrics"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full object-top"
              draggable={false}
            />
          </ContainerScroll>
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
                  <span>{SITE_CONFIG.contact.location}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-800">
                  <Mail size={18} className="text-primary" aria-hidden="true" />
                  <span>{SITE_CONFIG.contact.email}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-800">
                  <Phone size={18} className="text-primary" aria-hidden="true" />
                  <span>{SITE_CONFIG.contact.phone}</span>
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
                    <SkillBar key={skill.id} name={skill.name} percentage={skill.percentage} />
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
            <Suspense fallback={<SkeletonProjects />}>
              <ProjectsSection />
            </Suspense>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 relative" aria-labelledby="contact-heading">
          <div className="absolute inset-0 bg-white/90"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 id="contact-heading" className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Get In Touch
            </h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Info Card */}
              <div className="rounded-2xl shadow-xl overflow-hidden bg-white border border-slate-100">
                {/* Card header with gradient */}
                <div className="bg-gradient-to-r from-primary to-blue-500 px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center">
                      <Mail size={18} className="text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Contact Information</h3>
                      <p className="text-white/70 text-xs">Reach out through any channel</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="space-y-1">
                    <ContactItem
                      icon={Mail}
                      label="Email"
                      value={SITE_CONFIG.contact.email}
                      href={`mailto:${SITE_CONFIG.contact.email}`}
                    />
                    <ContactItem
                      icon={Phone}
                      label="Phone"
                      value={SITE_CONFIG.contact.phone}
                      href={`tel:${SITE_CONFIG.contact.phone}`}
                    />
                    <ContactItem
                      icon={MessageSquare}
                      label="WhatsApp"
                      value="Chat on WhatsApp"
                      href={SITE_CONFIG.contact.whatsapp}
                      isExternal={true}
                    />
                    <ContactItem icon={MapPin} label="Location" value={SITE_CONFIG.contact.location} />
                    <ContactItem
                      icon={Linkedin}
                      label="LinkedIn"
                      value="Kevin Ilama"
                      href={SITE_CONFIG.contact.linkedin}
                      isExternal={true}
                    />
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <a
                      href={SITE_CONFIG.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 w-full justify-center px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-xl hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
                    >
                      <Linkedin size={15} aria-hidden="true" />
                      <span>View LinkedIn Profile</span>
                    </a>
                  </div>
                </div>
              </div>
              <LazyLoadComponent>
                <LazyContactForm />
              </LazyLoadComponent>
            </div>
          </div>
        </section>

      </main>

      {/* Footer fuera de main para cumplir WCAG 1.3.1 (contentinfo no debe estar dentro de otro landmark) */}
      <footer className="py-8 bg-slate-900 text-white" role="contentinfo">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-white">
                © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href={SITE_CONFIG.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition p-1 min-w-[24px] min-h-[24px] inline-flex items-center justify-center"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} aria-hidden="true" />
              </a>
              <a href="#" className="text-white hover:text-primary transition p-1 min-w-[24px] min-h-[24px] inline-flex items-center justify-center" aria-label="GitHub Profile">
                <Github size={20} aria-hidden="true" />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="text-white hover:text-primary transition p-1 min-w-[24px] min-h-[24px] inline-flex items-center justify-center"
                aria-label="Email Me"
              >
                <Mail size={20} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

