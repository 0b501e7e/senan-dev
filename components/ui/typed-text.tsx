"use client"

import React, { useEffect, useState } from 'react'

interface TypedTextProps {
  text: string
  className?: string
  speed?: number
}

export function TypedText({ text, className, speed = 100 }: TypedTextProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  // Typing effect
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed])

  // Cursor blink effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530) // Standard terminal cursor blink rate

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