import Projects from "@/components/sections/projects"
import Skills from "@/components/sections/skills"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { siGithub, siLinkedin, siX, siMaildotru } from "simple-icons"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ModeToggle } from "@/components/ui/toggle"
import { TypedText } from "@/components/ui/typed-text"

export default function Home() {
  return (
    <main className="min-h-screen">

      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center space-y-4">
        <Avatar className="h-48 w-48">
          <AvatarImage src="avatar.png" />
          <AvatarFallback>YN</AvatarFallback>
        </Avatar>

        <h1 className="text-4xl font-bold">
          <TypedText text="Hi, I'm Senan." speed={150} />
        </h1>
        <p className="text-muted-foreground text-lg">
          I&apos;m a Full Stack Software Engineer / Smart Contract Engineer.
        </p>

        <div className="flex gap-4">
          <Button variant="ghost" asChild>
            <a href="https://github.com/0b501e7e" aria-label="GitHub Profile">
              <svg role="img" viewBox="0 0 24 24" className="h-16 w-16 scale-150" xmlns="http://www.w3.org/2000/svg">
                {siGithub.path && <path fill="currentColor" d={siGithub.path} />}
              </svg>
            </a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="https://www.linkedin.com/in/senan-warnock-7732a0238/" aria-label="LinkedIn Profile">
              <svg role="img" viewBox="0 0 24 24" className="h-16 w-16 scale-150" xmlns="http://www.w3.org/2000/svg">
                {siLinkedin.path && <path fill="currentColor" d={siLinkedin.path} />}
              </svg>
            </a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="https://x.com/0b501e7e" aria-label="X Profile">
              <svg role="img" viewBox="0 0 24 24" className="h-16 w-16 scale-150" xmlns="http://www.w3.org/2000/svg">
                {siX.path && <path fill="currentColor" d={siX.path} />}
              </svg>
            </a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="mailto:senanw95@gmail.com" aria-label="Email Me">
              <svg role="img" viewBox="0 0 24 24" className="h-16 w-16 scale-150" xmlns="http://www.w3.org/2000/svg">
                {siMaildotru.path && <path fill="currentColor" d={siMaildotru.path} />}
              </svg>
            </a>
          </Button>
        </div>

        <p className="text-muted-foreground text-lg !mt-12 max-w-md text-center">
          I&apos;m passionate about building full stack web applications, mobile apps, 
          and smart contracts. Interested in Public Key Cryptography, Zero Knowledge Proofs,
          Machine Learning and Distributed Systems.{" "}
          <Link 
            href="/blog" 
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            Check out my blog
            <ArrowLeft className="h-4 w-4" />
          </Link>
          {" "}where I write about my experiences and technical discoveries.
        </p>
      </section>

      <Projects />

      {/* Skills Section */}
      <Skills />

    </main>
  )
}