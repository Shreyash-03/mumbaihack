"use client"

import { useState } from 'react'
import { Home, PieChart, Target, TrendingUp, Settings, MessageSquare, Menu, X, LogOut, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { icon: Home, label: 'Dashboard', href: '/dashboard' },
    { icon: PieChart, label: 'Portfolio', href: '/dashboard/portfolio' },
    { icon: Target, label: 'Goals', href: '/dashboard/goals' },
    { icon: TrendingUp, label: 'Market', href: '/dashboard/market' },
    { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
  ]

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col border-r border-border bg-white">
        <div className="flex flex-col flex-1 min-h-0">
          {/* Logo */}
          <div className="flex items-center h-16 px-6 border-b border-border">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#1A73E8] to-[#06B6D4] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="text-xl font-bold">WealthBuddy</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-[#1A73E8] font-medium'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-border">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#1A73E8] to-[#06B6D4] rounded-full flex items-center justify-center text-white font-semibold">
                {user?.name?.charAt(0) || 'U'}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{user?.name || 'User'}</p>
                <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
              </div>
            </div>
            <Button 
              variant="outline" 
              className="w-full justify-start" 
              size="sm"
              onClick={() => {/* Add logout logic */}}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-border z-40 flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-[#1A73E8] to-[#06B6D4] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">W</span>
          </div>
          <span className="text-xl font-bold">WealthWise</span>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-30 bg-white pt-16">
          <nav className="px-4 py-6 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-[#1A73E8] font-medium'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </nav>
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border">
            <div className="flex items-center gap-3 px-3 py-2">
              <Avatar>
                <AvatarFallback className="bg-gradient-to-br from-[#1A73E8] to-[#06B6D4] text-white">
                  JD
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">John Doe</p>
                <p className="text-xs text-gray-500">john@example.com</p>
              </div>
            </div>
            <Button variant="ghost" className="w-full mt-2 justify-start" size="sm">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="lg:pl-64 pt-16 lg:pt-0">
        {children}
      </main>

      {/* Floating Chat Button */}
      <Link href="/dashboard/chat">
        <button className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-[#1A73E8] to-[#06B6D4] text-white rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center z-50">
          <MessageSquare className="w-6 h-6" />
        </button>
      </Link>
    </div>
  )
}