"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { TrendingUp, TrendingDown, ArrowUpRight, Filter } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts'
import DashboardLayout from '@/components/DashboardLayout'

const holdings = [
  { name: 'HDFC Equity Fund', amount: 45000, invested: 40000, returns: 12.5, units: 450, nav: 125.5, allocation: 36 },
  { name: 'ICICI Bluechip Fund', amount: 32000, invested: 30000, returns: 6.7, units: 320, nav: 115.2, allocation: 26 },
  { name: 'SBI Debt Fund', amount: 20000, invested: 19500, returns: 2.6, units: 200, nav: 102.8, allocation: 16 },
  { name: 'Axis Midcap Fund', amount: 18000, invested: 15000, returns: 20.0, units: 180, nav: 98.4, allocation: 14 },
  { name: 'Kotak Gilt Fund', amount: 10250, invested: 10000, returns: 2.5, units: 102, nav: 98.2, allocation: 8 },
]

const performanceData = [
  { month: 'Jan', portfolio: 85, benchmark: 82 },
  { month: 'Feb', portfolio: 92, benchmark: 88 },
  { month: 'Mar', portfolio: 88, benchmark: 85 },
  { month: 'Apr', portfolio: 95, benchmark: 90 },
  { month: 'May', portfolio: 103, benchmark: 95 },
  { month: 'Jun', portfolio: 125, benchmark: 110 },
]

const categoryData = [
  { category: 'Large Cap', value: 45 },
  { category: 'Mid Cap', value: 25 },
  { category: 'Small Cap', value: 10 },
  { category: 'Debt', value: 15 },
  { category: 'Others', value: 5 },
]

export default function PortfolioPage() {
  return (
    <DashboardLayout>
      <div className="p-4 lg:p-8 space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Portfolio</h1>
            <p className="text-gray-600 mt-1">Detailed view of your investments and holdings</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button>Add Investment</Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <p className="text-sm text-gray-600 font-medium">Total Invested</p>
              <h3 className="text-2xl font-bold mt-2">₹1,14,500</h3>
              <p className="text-sm text-gray-500 mt-1">Across 5 funds</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="text-sm text-gray-600 font-medium">Current Value</p>
              <h3 className="text-2xl font-bold mt-2">₹1,25,250</h3>
              <p className="text-sm text-green-600 mt-1 flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                +9.4% overall
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="text-sm text-gray-600 font-medium">Total Returns</p>
              <h3 className="text-2xl font-bold mt-2 text-green-600">+₹10,750</h3>
              <p className="text-sm text-gray-500 mt-1">Unrealized gains</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="text-sm text-gray-600 font-medium">XIRR</p>
              <h3 className="text-2xl font-bold mt-2">11.8%</h3>
              <p className="text-sm text-gray-500 mt-1">Annualized return</p>
            </CardContent>
          </Card>
        </div>

        {/* Performance Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Performance vs Benchmark</CardTitle>
            <p className="text-sm text-gray-600">Your portfolio compared to Nifty 50</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                />
                <Line type="monotone" dataKey="portfolio" stroke="#1A73E8" strokeWidth={2} name="Your Portfolio" />
                <Line type="monotone" dataKey="benchmark" stroke="#94A3B8" strokeWidth={2} strokeDasharray="5 5" name="Benchmark" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Holdings Table */}
        <Card>
          <CardHeader>
            <CardTitle>Your Holdings</CardTitle>
            <p className="text-sm text-gray-600">Complete list of your investments</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {holdings.map((holding, index) => (
                <div key={index} className="p-4 rounded-lg border border-gray-200 hover:border-[#1A73E8] hover:shadow-md transition-all">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-semibold text-gray-900">{holding.name}</h4>
                        <Badge variant={holding.returns > 0 ? "default" : "destructive"} className="text-xs">
                          {holding.returns > 0 ? '+' : ''}{holding.returns}%
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-gray-500">Invested</p>
                          <p className="font-medium">₹{holding.invested.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Current Value</p>
                          <p className="font-medium">₹{holding.amount.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Units</p>
                          <p className="font-medium">{holding.units}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">NAV</p>
                          <p className="font-medium">₹{holding.nav}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-sm text-gray-500">Allocation</p>
                        <p className="text-xl font-bold">{holding.allocation}%</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ArrowUpRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Category Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Category Breakdown</CardTitle>
            <p className="text-sm text-gray-600">Investment distribution by category</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={categoryData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="category" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                  formatter={(value: number) => `${value}%`}
                />
                <Bar dataKey="value" fill="#1A73E8" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
