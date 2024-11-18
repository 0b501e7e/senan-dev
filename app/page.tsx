import Projects from "@/components/sections/projects"
import Skills from "@/components/sections/skills"
import { ModeToggle } from "@/components/ui/toggle"
import { Hero } from "@/components/sections/hero"

export default function Home() {
  return (
    <main className="min-h-screen">

      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>

      <Hero />

      <Projects />

      {/* Skills Section */}
      <Skills />

    </main>
  )
}