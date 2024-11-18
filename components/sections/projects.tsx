import { getGithubProjects } from "@/utils/github"
import { ProjectCard } from "./project-card"

export default async function Projects() {
  const projects = await getGithubProjects()
  
  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Recent Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}