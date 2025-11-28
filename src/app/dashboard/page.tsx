"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowUpRight, ArrowDownRight, TrendingUp, Wallet, Target, Activity } from 'lucide-react'
import { LineChart, Line, AreaChart, Area, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import DashboardLayout from '@/components/DashboardLayout'

const portfolioData = [
  { month: 'Jan', value: 85000 },
  { month: 'Feb', value: 92000 },
  { month: 'Mar', value: 88000 },
  { month: 'Apr', value: 95000 },
  { month: 'May', value: 103000 },
  { month: 'Jun', value: 125000 },
]

const assetAllocation = [
  { name: 'Equity', value: 60, color: '#1A73E8' },
  { name: 'Debt', value: 25, color: '#22D3EE' },
  { name: 'Gold', value: 10, color: '#F59E0B' },
  { name: 'Cash', value: 5, color: '#10B981' },
]

const recentActivities = [
  { type: 'buy', fund: 'HDFC Equity Fund', amount: '₹10,000', date: '2 hours ago', change: '+2.4%' },
  { type: 'sell', fund: 'ICICI Debt Fund', amount: '₹5,000', date: '1 day ago', change: '+1.2%' },
  { type: 'sip', fund: 'SBI Bluechip Fund', amount: '₹3,000', date: '3 days ago', change: '+3.1%' },
  { type: 'dividend', fund: 'Axis Midcap Fund', amount: '₹1,250', date: '5 days ago', change: '+0.8%' },
]

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="p-4 lg:p-8 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's your investment overview.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 font-medium">Total Investment</p>
                  <h3 className="text-2xl font-bold mt-2">₹1,25,000</h3>
                  <div className="flex items-center mt-2 text-sm">
                    <ArrowUpRight className="w-4 h-4 text-green-600 mr-1" />
                    <span className="text-green-600 font-medium">+12.5%</span>
                    <span className="text-gray-500 ml-2">this month</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Wallet className="w-6 h-6 text-[#1A73E8]" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 font-medium">Current Value</p>
                  <h3 className="text-2xl font-bold mt-2">₹1,45,250</h3>
                  <div className="flex items-center mt-2 text-sm">
                    <ArrowUpRight className="w-4 h-4 text-green-600 mr-1" />
                    <span className="text-green-600 font-medium">+16.2%</span>
                    <span className="text-gray-500 ml-2">ROI</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-[#10B981]" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 font-medium">Total Gains</p>
                  <h3 className="text-2xl font-bold mt-2">₹20,250</h3>
                  <div className="flex items-center mt-2 text-sm">
                    <ArrowUpRight className="w-4 h-4 text-green-600 mr-1" />
                    <span className="text-green-600 font-medium">+8.5%</span>
                    <span className="text-gray-500 ml-2">vs last month</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                  <Activity className="w-6 h-6 text-[#22D3EE]" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 font-medium">Active Goals</p>
                  <h3 className="text-2xl font-bold mt-2">5 Goals</h3>
                  <div className="flex items-center mt-2 text-sm">
                    <span className="text-orange-600 font-medium">3 On Track</span>
                    <span className="text-gray-500 ml-2">2 pending</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#F59E0B]" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Portfolio Growth */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Portfolio Growth</CardTitle>
              <p className="text-sm text-gray-600">Your investment performance over time</p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={portfolioData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1A73E8" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#1A73E8" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                    formatter={(value: number) => `₹${value.toLocaleString()}`}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#1A73E8" 
                    strokeWidth={2}
                    fillOpacity={1} 
                    fill="url(#colorValue)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Asset Allocation */}
          <Card>
            <CardHeader>
              <CardTitle>Asset Allocation</CardTitle>
              <p className="text-sm text-gray-600">Current portfolio distribution</p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={assetAllocation}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {assetAllocation.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: number) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {assetAllocation.map((item) => (
                  <div key={item.name} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <span className="text-gray-700">{item.name}</span>
                    </div>
                    <span className="font-medium">{item.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <p className="text-sm text-gray-600">Your latest transactions and updates</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      activity.type === 'buy' ? 'bg-green-100' :
                      activity.type === 'sell' ? 'bg-red-100' :
                      activity.type === 'sip' ? 'bg-blue-100' :
                      'bg-orange-100'
                    }`}>
                      {activity.type === 'buy' && <ArrowUpRight className="w-5 h-5 text-green-600" />}
                      {activity.type === 'sell' && <ArrowDownRight className="w-5 h-5 text-red-600" />}
                      {activity.type === 'sip' && <Activity className="w-5 h-5 text-blue-600" />}
                      {activity.type === 'dividend' && <TrendingUp className="w-5 h-5 text-orange-600" />}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{activity.fund}</p>
                      <p className="text-sm text-gray-500">{activity.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{activity.amount}</p>
                    <p className="text-sm text-green-600">{activity.change}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
