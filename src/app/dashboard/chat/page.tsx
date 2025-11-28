"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Send, Bot, User as UserIcon, Sparkles, TrendingUp, Target, PieChart } from 'lucide-react'
import DashboardLayout from '@/components/DashboardLayout'

interface Message {
  role: 'user' | 'assistant'
  content: string
  timestamp: string
}

const suggestedQuestions = [
  { icon: TrendingUp, text: 'How is my portfolio performing?', color: 'blue' },
  { icon: Target, text: 'Am I on track with my goals?', color: 'green' },
  { icon: PieChart, text: 'Should I rebalance my portfolio?', color: 'purple' },
  { icon: Sparkles, text: 'What are good investment opportunities?', color: 'orange' },
]

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! I\'m your AI Financial Advisor. I can help you with portfolio analysis, investment recommendations, goal planning, and answer any questions about your finances. How can I assist you today?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputValue
    if (!messageText.trim()) return

    // Add user message
    const userMessage: Message = {
      role: 'user',
      content: messageText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const responses: { [key: string]: string } = {
        'portfolio': 'Your portfolio is performing well! Current value: ₹1,45,250 with an overall return of +16.2%. Your equity allocation (60%) is outperforming the benchmark by 2.3%. Would you like a detailed breakdown?',
        'goals': 'You\'re doing great! 3 out of 5 goals are on track. Your "Buy New Bike" goal will be achieved by Dec 2024 at the current SIP rate. Your "Emergency Fund" is 56% complete. Should I suggest optimizations?',
        'rebalance': 'Based on your current allocation and risk profile, I recommend slight rebalancing. Your equity exposure has increased to 62% due to market gains. Consider moving 2% to debt funds to maintain your target 60-25-10-5 allocation.',
        'opportunities': 'Based on current market trends and your moderate risk profile, I suggest: 1) HDFC Top 100 Fund (18.5% 1Y returns, 5★ rated), 2) SBI Small Cap Fund (24.3% returns), 3) Axis Midcap Fund (21.7% returns). Shall I create a detailed investment plan?',
        'default': 'I understand you\'re asking about your investments. Could you be more specific? I can help with portfolio analysis, goal planning, tax optimization, fund recommendations, or market insights.'
      }

      let responseContent = responses.default
      const lowerMessage = messageText.toLowerCase()
      
      if (lowerMessage.includes('portfolio') || lowerMessage.includes('performing')) {
        responseContent = responses.portfolio
      } else if (lowerMessage.includes('goal') || lowerMessage.includes('track')) {
        responseContent = responses.goals
      } else if (lowerMessage.includes('rebalance') || lowerMessage.includes('allocation')) {
        responseContent = responses.rebalance
      } else if (lowerMessage.includes('opportunit') || lowerMessage.includes('invest') || lowerMessage.includes('recommend')) {
        responseContent = responses.opportunities
      }

      const assistantMessage: Message = {
        role: 'assistant',
        content: responseContent,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
      setMessages(prev => [...prev, assistantMessage])
      setIsTyping(false)
    }, 1500)
  }

  return (
    <DashboardLayout>
      <div className="h-[calc(100vh-4rem)] lg:h-screen flex flex-col p-4 lg:p-8">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#1A73E8] to-[#06B6D4] rounded-full flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">AI Financial Advisor</h1>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <p className="text-sm text-gray-600">Online • Ready to help</p>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Container */}
        <Card className="flex-1 flex flex-col overflow-hidden">
          {/* Messages Area */}
          <CardContent className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                {/* Avatar */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.role === 'user'
                    ? 'bg-gray-200'
                    : 'bg-gradient-to-br from-[#1A73E8] to-[#06B6D4]'
                }`}>
                  {message.role === 'user' ? (
                    <UserIcon className="w-5 h-5 text-gray-700" />
                  ) : (
                    <Bot className="w-5 h-5 text-white" />
                  )}
                </div>

                {/* Message Bubble */}
                <div className={`flex flex-col max-w-[70%] ${message.role === 'user' ? 'items-end' : 'items-start'}`}>
                  <div
                    className={`rounded-2xl px-4 py-3 ${
                      message.role === 'user'
                        ? 'bg-[#1A73E8] text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </div>
                  <span className="text-xs text-gray-500 mt-1 px-2">{message.timestamp}</span>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1A73E8] to-[#06B6D4] flex items-center justify-center flex-shrink-0">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="bg-gray-100 rounded-2xl px-4 py-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>

          {/* Suggested Questions */}
          {messages.length === 1 && (
            <div className="px-6 py-4 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-3 font-medium">Suggested questions:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {suggestedQuestions.map((question, index) => {
                  const Icon = question.icon
                  return (
                    <button
                      key={index}
                      onClick={() => handleSendMessage(question.text)}
                      className="flex items-center gap-2 p-3 rounded-lg border border-gray-200 hover:border-[#1A73E8] hover:bg-blue-50 transition-colors text-left"
                    >
                      <Icon className="w-4 h-4 text-[#1A73E8]" />
                      <span className="text-sm text-gray-700">{question.text}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask me anything about your investments..."
                className="flex-1"
              />
              <Button 
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim() || isTyping}
                size="icon"
                className="flex-shrink-0"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              AI responses are for informational purposes only. Always consult a financial advisor.
            </p>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  )
}
