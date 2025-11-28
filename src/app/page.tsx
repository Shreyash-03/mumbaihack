"use client"

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, TrendingUp, Shield, Zap, LineChart, Target, Sparkles, Check, ArrowUp } from 'lucide-react'
import { Header } from '@/components/ui/header-05'
import AuthModal from '@/components/AuthModal'
import { HeroSectionDark } from '@/components/ui/hero-section-dark'
import { Boxes } from '@/components/ui/background-boxes'
import Casestudies from '@/components/ui/case-studies'
import HeroSection from '@/components/ui/a-modern-hero-section'
import Lenis from 'lenis'
import Image from 'next/image'
import WealthBuddyLogo from '@/components/WealthBuddyLogo'
import { FeaturesSectionWithHoverEffects } from '@/components/ui/feature-section-with-hover-effects'
import { FaqStackedCards } from '@/components/ui/faq-stacked-cards'

export default function Home() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Handle scroll for back to top button
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      lenis.destroy()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-background">
      <Header onAuthClick={() => setIsAuthModalOpen(true)} />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <HeroSectionDark
          title="Welcome to WealthBuddy"
          subtitle={{
            regular: "Grow Your Wealth with ",
            gradient: "Intelligent AI-Powered Investing",
          }}
          description="WealthBuddy uses advanced AI to create personalized investment strategies tailored to your financial goals. Start building your financial future today with autonomous portfolio management."
          ctaText="Start Investing Free"
          onCtaClick={() => setIsAuthModalOpen(true)}
          secondaryCtaText="Watch Demo"
          onSecondaryCtaClick={() => setIsAuthModalOpen(true)}
          bottomImage={{
            light: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/ChatGPT-Image-Nov-26-2025-11_35_53-PM-1764180363399.png?width=8000&height=8000&resize=contain",
            dark: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/ChatGPT-Image-Nov-26-2025-11_35_53-PM-1764180363399.png?width=8000&height=8000&resize=contain",
          }}
          gridOptions={{
            angle: 65,
            opacity: 0.4,
            cellSize: 50,
            lightLineColor: "#4a4a4a",
            darkLineColor: "#2a2a2a",
          }}
        />
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-4">Everything You Need to Succeed</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Powerful features designed to help you achieve your financial goals with confidence
            </p>
          </div>

          <FeaturesSectionWithHoverEffects />
        </div>
      </section>

      {/* Case Studies Section */}
      <Casestudies />

      {/* How It Works */}
      <section id="how-it-works" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-4">Start Investing in 3 Simple Steps</h2>
            <p className="text-lg sm:text-xl text-muted-foreground px-4">From signup to your first investment in minutes</p>
          </div>

          {/* Desktop/Tablet Stepper */}
          <div className="hidden md:block relative max-w-5xl mx-auto">
            {/* Connecting Line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-border" style={{ left: 'calc(16.67%)', right: 'calc(16.67%)' }}></div>
            
            <div className="grid md:grid-cols-3 gap-12 relative">
              {/* Step 1 */}
              <div className="text-center relative">
                <div className="w-16 h-16 bg-foreground rounded-full flex items-center justify-center text-background text-2xl font-bold mx-auto mb-6 relative z-10 shadow-lg">
                  1
                </div>
                <h3 className="text-2xl font-semibold mb-3">Create Your Profile</h3>
                <p className="text-muted-foreground">
                  Tell us about your financial goals, risk tolerance, and investment timeline in just a few clicks.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center relative">
                <div className="w-16 h-16 bg-foreground rounded-full flex items-center justify-center text-background text-2xl font-bold mx-auto mb-6 relative z-10 shadow-lg">
                  2
                </div>
                <h3 className="text-2xl font-semibold mb-3">Get Your Plan</h3>
                <p className="text-muted-foreground">
                  Our AI analyzes your profile and creates a personalized investment strategy optimized for your goals.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center relative">
                <div className="w-16 h-16 bg-foreground rounded-full flex items-center justify-center text-background text-2xl font-bold mx-auto mb-6 relative z-10 shadow-lg">
                  3
                </div>
                <h3 className="text-2xl font-semibold mb-3">Start Growing</h3>
                <p className="text-muted-foreground">
                  Fund your account and watch your wealth grow with automated, intelligent portfolio management.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Vertical Stepper */}
          <div className="md:hidden max-w-md mx-auto">
            <div className="relative">
              {/* Vertical Connecting Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

              {/* Step 1 */}
              <div className="relative pb-12">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-16 h-16 bg-foreground rounded-full flex items-center justify-center text-background text-2xl font-bold relative z-10 flex-shrink-0 shadow-lg">
                    1
                  </div>
                  <div className="pt-2 flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">Create Your Profile</h3>
                    <p className="text-muted-foreground text-sm">
                      Tell us about your financial goals, risk tolerance, and investment timeline in just a few clicks.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative pb-12">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-16 h-16 bg-foreground rounded-full flex items-center justify-center text-background text-2xl font-bold relative z-10 flex-shrink-0 shadow-lg">
                    2
                  </div>
                  <div className="pt-2 flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">Get Your Plan</h3>
                    <p className="text-muted-foreground text-sm">
                      Our AI analyzes your profile and creates a personalized investment strategy optimized for your goals.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-16 h-16 bg-foreground rounded-full flex items-center justify-center text-background text-2xl font-bold relative z-10 flex-shrink-0 shadow-lg">
                    3
                  </div>
                  <div className="pt-2 flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">Start Growing</h3>
                    <p className="text-muted-foreground text-sm">
                      Fund your account and watch your wealth grow with automated, intelligent portfolio management.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-4">Simple, Transparent Pricing</h2>
            <p className="text-lg sm:text-xl text-muted-foreground px-4">Choose the plan that works best for you</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <Card className="p-6 sm:p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Starter</h3>
              <div className="mb-6">
                <span className="text-3xl sm:text-4xl font-bold">₹0</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Up to ₹1L portfolio</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Basic portfolio management</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">3 investment goals</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Email support</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full" onClick={() => setIsAuthModalOpen(true)}>Get Started</Button>
            </Card>

            <Card className="p-6 sm:p-8 hover:shadow-xl transition-shadow border-2 border-[#1A73E8] relative sm:col-span-2 lg:col-span-1">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Most Popular</Badge>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Premium</h3>
              <div className="mb-6">
                <span className="text-3xl sm:text-4xl font-bold">₹999</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Unlimited portfolio</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Advanced AI optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Unlimited goals</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Priority support</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Tax optimization</span>
                </li>
              </ul>
              <Button className="w-full" onClick={() => setIsAuthModalOpen(true)}>Get Started</Button>
            </Card>

            <Card className="p-6 sm:p-8 hover:shadow-xl transition-shadow sm:col-span-2 lg:col-span-1">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Enterprise</h3>
              <div className="mb-6">
                <span className="text-3xl sm:text-4xl font-bold">Custom</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Everything in Premium</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Dedicated account manager</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Custom integrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">24/7 phone support</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">Contact Sales</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-4">Frequently Asked Questions</h2>
            <p className="text-lg sm:text-xl text-muted-foreground px-4">Everything you need to know about WealthBuddy</p>
          </div>
          
          <FaqStackedCards />
        </div>
      </section>

      {/* CTA Section */}
      <HeroSection />

      {/* Footer */}
      <footer className="border-t border-border py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8">
            <div className="col-span-2 md:col-span-1">
              <div className="mb-4 flex items-center gap-3">
                <WealthBuddyLogo size={48} />
                <span className="text-xl font-bold text-foreground">WealthBuddy</span>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground">
                Autonomous investment planning powered by AI
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Product</h4>
              <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                <li><a href="#" className="hover:text-foreground">Features</a></li>
                <li><a href="#" className="hover:text-foreground">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
              <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                <li><a href="#" className="hover:text-foreground">About</a></li>
                <li><a href="#" className="hover:text-foreground">Blog</a></li>
                <li><a href="#" className="hover:text-foreground">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Legal</h4>
              <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                <li><a href="#" className="hover:text-foreground">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground">Terms</a></li>
                <li><a href="#" className="hover:text-foreground">Compliance</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-6 sm:pt-8 text-center text-muted-foreground text-sm sm:text-base">
            <p>© 2024 WealthBuddy by CrewX. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onSuccess={() => window.location.href = '/dashboard'}
      />

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  )
}