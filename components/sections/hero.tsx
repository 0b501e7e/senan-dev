"use client"
import { useState } from 'react'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { siGithub, siLinkedin, siX, siMaildotru } from "simple-icons"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { TypedText } from "@/components/ui/typed-text"
import { Skeleton } from "@/components/ui/skeleton"

type TextConfig = {
  text: string
  className: string
  wrapper?: keyof JSX.IntrinsicElements
}

const texts: TextConfig[] = [
  {
    text: "Hi, I'm Senan.",
    className: "text-4xl font-bold",
    wrapper: "h1"
  },
  {
    text: "I'm a Full Stack Software Engineer / Smart Contract Engineer.",
    className: "text-muted-foreground text-lg",
  },
  {
    text: "I'm passionate about building full stack web applications, mobile apps, and smart contracts. Interested in Public Key Cryptography, Zero Knowledge Proofs, Machine Learning and Distributed Systems. Check out my blog where I write about my experiences and technical discoveries.",
    className: "text-muted-foreground text-lg !mt-12 max-w-md text-center",
  }
]

export function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [showLink, setShowLink] = useState(false)

  const renderText = (text: TextConfig, index: number) => {
    if (index > currentTextIndex) return null

    const Wrapper = text.wrapper || "div"
    
    return (
      <Wrapper key={index} className={text.className}>
        <TypedText
          text={text.text}
          speed={100}
          delay={index * 200}
          onComplete={() => {
            if (index < texts.length - 1) {
              setCurrentTextIndex(index + 1)
            } else {
              setShowLink(true)
            }
          }}
        />
        {index === texts.length - 1 && showLink && (
          <Link 
            href="/blog" 
            className="text-primary hover:underline inline-flex items-center gap-1 ml-2"
          >
            Read More
            <ArrowLeft className="h-4 w-4" />
          </Link>
        )}
      </Wrapper>
    )
  }

  return (
    <section className="h-screen flex flex-col items-center justify-center space-y-4">
      <Avatar className="h-48 w-48">
        <AvatarImage src="avatar.png" loading="lazy" className="object-cover" />
        <AvatarFallback className="bg-muted">
          <Skeleton className="h-full w-full rounded-full bg-muted-foreground/20" />
        </AvatarFallback>
      </Avatar>

      {texts.map(renderText)}

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
    </section>
  )
}