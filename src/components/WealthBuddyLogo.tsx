import React from 'react'

interface WealthBuddyLogoProps {
  size?: number
  className?: string
}

export default function WealthBuddyLogo({ size = 48, className = '' }: WealthBuddyLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* W Letter Shape - Refined design with better proportions */}
      <path
        d="M8 20 L20 20 L32 70 L50 35 L68 70 L80 20 L92 20 L76 82 L58 82 L50 58 L42 82 L24 82 Z"
        fill="url(#wGradient)"
      />
      
      {/* Gradient definition */}
      <defs>
        <linearGradient id="wGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1A73E8" />
          <stop offset="50%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#22D3EE" />
        </linearGradient>
      </defs>
    </svg>
  )
}