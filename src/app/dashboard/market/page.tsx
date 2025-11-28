"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { TrendingUp, TrendingDown, Search, ArrowUpRight, Star } from 'lucide-react'
import { LineChart, Line, ResponsiveContainer } from 'recharts'
import DashboardLayout from '@/components/DashboardLayout'

const indices = [
  { name: 'Nifty 50', value: '22,453.30', change: '+234.50', percent: '+1.06%', positive: true },
  { name: 'Sensex', value: '74,119.39', change: '+456.78', percent: '+0.62%', positive: true },
  { name: 'Bank Nifty', value: '48,234.60', change: '-123.45', percent: '-0.26%', positive: false },
  { name: 'Nifty IT', value: '34,567.80', change: '+567.90', percent: '+1.67%', positive: true },
]

const trendingFunds = [
  { 
    name: 'HDFC Top 100 Fund', 
    category: 'Large Cap', 
    return1y: 18.5, 
    return3y: 15.2, 
    aum: '₹45,230 Cr',
    rating: 5,
    trend: [40, 45, 42, 48, 52, 50, 55, 58]
  },
  { 
    name: 'ICICI Prudential Bluechip', 
    category: 'Large Cap', 
    return1y: 16.8, 
    return3y: 14.5, 
    aum: '₹38,450 Cr',
    rating: 4,
    trend: [35, 38, 40, 37, 42, 45, 47, 50]
  },
  { 
    name: 'SBI Small Cap Fund', 
    category: 'Small Cap', 
    return1y: 24.3, 
    return3y: 22.1, 
    aum: '₹12,890 Cr',
    rating: 5,
    trend: [30, 35, 38, 42, 45, 50, 55, 60]
  },
  { 
    name: 'Axis Midcap Fund', 
    category: 'Mid Cap', 
    return1y: 21.7, 
    return3y: 18.9, 
    aum: '₹28,670 Cr',
    rating: 4,
    trend: [32, 36, 35, 40, 44, 46, 48, 52]
  },
  { 
    name: 'Kotak Emerging Equity', 
    category: 'Multi Cap', 
    return1y: 19.2, 
    return3y: 16.3, 
    aum: '₹23,450 Cr',
    rating: 5,
    trend: [38, 40, 42, 41, 45, 48, 50, 54]
  },
]

const news = [
  { 
    title: 'RBI Keeps Repo Rate Unchanged at 6.5%', 
    source: 'Economic Times', 
    time: '2 hours ago',
    category: 'Policy'
  },
  { 
    title: 'Tech Stocks Rally on Strong Q4 Earnings', 
    source: 'Business Standard', 
    time: '4 hours ago',
    category: 'Markets'
  },
  { 
    title: 'Gold Prices Hit New All-Time High', 
    source: 'Moneycontrol', 
    time: '6 hours ago',
    category: 'Commodities'
  },
  { 
    title: 'FIIs Turn Net Buyers After 3 Months', 
    source: 'Live Mint', 
    time: '8 hours ago',
    category: 'Markets'
  },
]

export default function MarketPage() {
  return (
    <DashboardLayout>
      <div className="p-4 lg:p-8 space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Market Overview</h1>
            <p className="text-gray-600 mt-1">Live market data and trending investment opportunities</p>
          </div>
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input 
              placeholder="Search funds, stocks, indices..." 
              className="pl-10"
            />
          </div>
        </div>

        {/* Market Indices */}
        <Card>
          <CardHeader>
            <CardTitle>Market Indices</CardTitle>
            <p className="text-sm text-gray-600">Live indices - Updated every 5 minutes</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {indices.map((index) => (
                <div key={index.name} className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <p className="text-sm text-gray-600 mb-1">{index.name}</p>
                  <h3 className="text-2xl font-bold mb-2">{index.value}</h3>
                  <div className="flex items-center gap-2">
                    {index.positive ? (
                      <TrendingUp className="w-4 h-4 text-green-600" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-600" />
                    )}
                    <span className={`text-sm font-medium ${index.positive ? 'text-green-600' : 'text-red-600'}`}>
                      {index.change} ({index.percent})
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Trending Funds */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Trending Mutual Funds</CardTitle>
                <p className="text-sm text-gray-600">Top performing funds based on returns</p>
              </div>
              <Button variant="outline" size="sm">View All</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {trendingFunds.map((fund, index) => (
                <div key={index} className="p-4 rounded-lg border border-gray-200 hover:border-[#1A73E8] hover:shadow-md transition-all">
                  <div className="flex flex-col lg:flex-row gap-4">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{fund.name}</h4>
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="text-xs">{fund.category}</Badge>
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`w-3 h-3 ${i < fund.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="w-24 h-12">
                          <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={fund.trend.map((val, i) => ({ value: val }))}>
                              <Line 
                                type="monotone" 
                                dataKey="value" 
                                stroke="#10B981" 
                                strokeWidth={2}
                                dot={false}
                              />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-gray-500">1Y Return</p>
                          <p className="font-semibold text-green-600">+{fund.return1y}%</p>
                        </div>
                        <div>
                          <p className="text-gray-500">3Y Return</p>
                          <p className="font-semibold text-green-600">+{fund.return3y}%</p>
                        </div>
                        <div>
                          <p className="text-gray-500">AUM</p>
                          <p className="font-semibold text-gray-900">{fund.aum}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button size="sm" className="flex-1">
                            Invest Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Market News & Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Market News & Insights</CardTitle>
              <p className="text-sm text-gray-600">Latest updates from financial markets</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {news.map((item, index) => (
                  <div key={index} className="p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                          <span>{item.source}</span>
                          <span>•</span>
                          <span>{item.time}</span>
                          <Badge variant="secondary" className="text-xs">{item.category}</Badge>
                        </div>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">Load More News</Button>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 rounded-lg bg-green-50">
                <p className="text-sm text-gray-600 mb-1">FII Net Investment</p>
                <h3 className="text-2xl font-bold text-green-600">₹2,345 Cr</h3>
                <p className="text-xs text-gray-500 mt-1">Last 5 sessions</p>
              </div>
              <div className="p-4 rounded-lg bg-blue-50">
                <p className="text-sm text-gray-600 mb-1">Market Cap</p>
                <h3 className="text-2xl font-bold text-[#1A73E8]">₹385.4 Lakh Cr</h3>
                <p className="text-xs text-gray-500 mt-1">BSE Total</p>
              </div>
              <div className="p-4 rounded-lg bg-orange-50">
                <p className="text-sm text-gray-600 mb-1">VIX (Volatility)</p>
                <h3 className="text-2xl font-bold text-[#F59E0B]">14.56</h3>
                <p className="text-xs text-gray-500 mt-1">India VIX</p>
              </div>
              <div className="p-4 rounded-lg bg-purple-50">
                <p className="text-sm text-gray-600 mb-1">Gold (MCX)</p>
                <h3 className="text-2xl font-bold text-purple-600">₹72,450</h3>
                <p className="text-xs text-gray-500 mt-1">Per 10 grams</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
