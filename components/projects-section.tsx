"use client"

import { useState } from "react"
import ProjectCard from "./project-card"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { initialProjects, additionalProjects } from "@/data/projects"

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false)
  const projects = showAll ? [...initialProjects, ...additionalProjects] : initialProjects

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            subtitle={project.subtitle}
            description={project.description}
            rating={project.rating}
            tags={project.tags}
            bgColor={project.bgColor}
            icon={project.icon}
          />
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Button
          variant="outline"
          size="lg"
          className="group border-primary text-primary hover:bg-primary/10"
          onClick={() => setShowAll(!showAll)}
        >
          <span>{showAll ? "Show Less" : "View More Projects"}</span>
          <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} />
        </Button>
      </div>
    </div>
  )
}

