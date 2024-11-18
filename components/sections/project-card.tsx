"use client"
import { useEffect, useRef } from "react"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { siGithub } from "simple-icons"
import { Badge } from "@/components/ui/badge"

type ProjectCardProps = {
  project: {
    id: number
    name: string
    description: string | null
    html_url: string
    topics: string[]
  }
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('is-visible')
          }, index * 200)
        }
      })
    }, { threshold: 0.1 })

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [index])

  return (
    <Card ref={cardRef} className="project-card fade-in-section flex flex-col">
      <CardHeader>
        <h3 className="text-2xl font-semibold">{project.name}</h3>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.topics.map((topic) => (
            <Badge key={topic} variant="secondary">
              {topic}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" asChild>
          <a href={project.html_url} className="hover:underline">
            <svg role="img" viewBox="0 0 24 24" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
              {siGithub.path && <path fill="currentColor" d={siGithub.path} />}
            </svg>
            View Code
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}