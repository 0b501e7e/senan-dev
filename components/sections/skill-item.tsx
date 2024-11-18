"use client"
import { useEffect, useRef } from "react"

type SkillItemProps = {
  skill: {
    icon: { path?: string }
    name: string
  }
  index: number
}

export function SkillItem({ skill, index }: SkillItemProps) {
  const itemRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('is-visible')
          }, index * 100) // Slightly faster delay than projects
        }
      })
    }, { threshold: 0.1 })

    if (itemRef.current) {
      observer.observe(itemRef.current)
    }

    return () => observer.disconnect()
  }, [index])

  return (
    <div 
      ref={itemRef} 
      className="fade-in-section flex flex-col items-center gap-2 hover:scale-110 transition-transform"
    >
      <svg role="img" viewBox="0 0 24 24" className="h-12 w-12" xmlns="http://www.w3.org/2000/svg">
        {skill.icon.path && <path fill="currentColor" d={skill.icon.path} />}
      </svg>
      <span className="text-sm font-medium">{skill.name}</span>
    </div>
  )
}