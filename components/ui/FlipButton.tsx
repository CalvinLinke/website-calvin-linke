"use client"

import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"

interface FlipButtonProps {
  href: string
  text?: string
  hoverText?: string
  variant?: "navy" | "white" | "glass"
  size?: "sm" | "md" | "lg"
  className?: string
}

const sizes = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-sm",
  lg: "px-8 py-4 text-sm",
}

type StyleObj = React.CSSProperties

const variantConfig: Record<string, { front: StyleObj; back: StyleObj }> = {
  navy: {
    front: { backgroundColor: "#091426", color: "#ffffff" },
    back:  { backgroundColor: "#f7f9fb", color: "#091426" },
  },
  white: {
    front: { backgroundColor: "#ffffff", color: "#091426" },
    back:  { backgroundColor: "#091426", color: "#ffffff" },
  },
  glass: {
    front: {
      backgroundColor: "rgba(255,255,255,0.15)",
      color: "#ffffff",
      border: "1px solid rgba(255,255,255,0.25)",
      backdropFilter: "blur(12px)",
    },
    back: {
      backgroundColor: "rgba(255,255,255,0.92)",
      color: "#091426",
    },
  },
}

export function FlipButton({
  href,
  text = "Kontakt aufnehmen",
  hoverText = "Meld dich einfach.",
  variant = "navy",
  size = "md",
  className = "",
}: FlipButtonProps) {
  const [hovered, setHovered] = useState(false)
  const { front, back } = variantConfig[variant]
  const padding = sizes[size]

  return (
    <Link
      href={href}
      className={`relative inline-block ${className}`}
      style={{ perspective: "800px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        style={{ transformStyle: "preserve-3d", borderRadius: "9999px", position: "relative" }}
        animate={{ rotateX: hovered ? 180 : 0 }}
        transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* Invisible spacer — sizes button to the wider of the two texts */}
        <div
          aria-hidden
          className={`${padding} font-semibold invisible select-none pointer-events-none whitespace-nowrap`}
        >
          {hoverText.length >= text.length ? hoverText : text}
        </div>

        {/* Front */}
        <div
          style={{ ...front, backfaceVisibility: "hidden", borderRadius: "9999px", position: "absolute", inset: 0 }}
          className={`${padding} font-semibold flex items-center justify-center whitespace-nowrap`}
        >
          {text}
        </div>

        {/* Back */}
        <div
          style={{
            ...back,
            backfaceVisibility: "hidden",
            transform: "rotateX(180deg)",
            borderRadius: "9999px",
            position: "absolute",
            inset: 0,
          }}
          className={`${padding} font-semibold flex items-center justify-center whitespace-nowrap`}
        >
          {hoverText}
        </div>
      </motion.div>
    </Link>
  )
}
