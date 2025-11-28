"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import AuthModal from './AuthModal'
import WealthBuddyLogo from './WealthBuddyLogo'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <WealthBuddyLogo size={48} />
              <span className="text-xl font-bold text-foreground">WealthBuddy</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <Button variant="ghost" onClick={() => setIsAuthModalOpen(true)}>Login</Button>
              <Button onClick={() => setIsAuthModalOpen(true)}>Get Started</Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-white">
            <div className="px-4 py-4 space-y-3">
              <a href="#features" className="block py-2 text-muted-foreground hover:text-foreground">Features</a>
              <a href="#how-it-works" className="block py-2 text-muted-foreground hover:text-foreground">How It Works</a>
              <a href="#pricing" className="block py-2 text-muted-foreground hover:text-foreground">Pricing</a>
              <a href="#about" className="block py-2 text-muted-foreground hover:text-foreground">About</a>
              <div className="pt-3 space-y-2">
                <Button variant="outline" className="w-full" onClick={() => setIsAuthModalOpen(true)}>Login</Button>
                <Button className="w-full" onClick={() => setIsAuthModalOpen(true)}>Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  )
}