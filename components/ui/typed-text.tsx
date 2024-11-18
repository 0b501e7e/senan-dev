"use client"

import React, { useEffect, useState } from 'react'

interface TypedTextProps {
  text: string
  className?: string
  speed?: number
  delay?: number
  onComplete?: () => void
}

export function TypedText({ 
  text, 
  className, 
  speed = 100,
  delay = 0,
  onComplete 
}: TypedTextProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [shouldStart, setShouldStart] = useState(false)

  // Handle initial delay
  useEffect(() => {
    const timer = setTimeout(() => setShouldStart(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  // Typing effect
  useEffect(() => {
    if (!shouldStart) return

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    } else if (onComplete) {
      onComplete()
    }
  }, [currentIndex, text, speed, shouldStart, onComplete])

  // Cursor blink effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)

    return () => clearInterval(blinkInterval)
  }, [])

  return (
    <span className={className}>
      {displayedText}
      <span 
        className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-none`}
        style={{ borderRight: '0.15em solid currentColor' }}
      >
      </span>
    </span>
  )
}