"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Plus, Target, Calendar, TrendingUp, DollarSign } from 'lucide-react'
import DashboardLayout from '@/components/DashboardLayout'

const goals = [
  {
    id: 1,
    name: 'Buy New Bike',
    target: 150000,
    current: 125000,
    monthly: 5000,
    deadline: 'Dec 2024',
    status: 'on-track',
    icon: '🏍️',
    color: 'blue'
  },
  {
    id: 2,
    name: 'Emergency Fund',
    target: 500000,
    current: 280000,
    monthly: 15000,
    deadline: 'Jun 2025',
    status: 'on-track',
    icon: '🛡️',
    color: 'green'
  },
  {
    id: 3,
    name: 'Dream Vacation',
    target: 200000,
    current: 45000,
    monthly: 8000,
    deadline: 'Dec 2025',
    status: 'behind',
    icon: '✈️',
    color: 'purple'
  },
  {
    id: 4,
    name: 'Retirement Planning',
    target: 10000000,
    current: 850000,
    monthly: 25000,
    deadline: 'Dec 2045',
    status: 'on-track',
    icon: '🏖️',
    color: 'orange'
  },
  {
    id: 5,
    name: 'Child Education',
    target: 2500000,
    current: 450000,
    monthly: 12000,
    deadline: 'Jun 2035',
    status: 'ahead',
    icon: '🎓',
    color: 'cyan'
  },
]

export default function GoalsPage() {
  return (
    <DashboardLayout>
      <div className="p-4 lg:p-8 space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Financial Goals</h1>
            <p className="text-gray-600 mt-1">Track and manage your investment goals</p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Create New Goal
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#1A73E8]" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Goals</p>
                  <h3 className="text-2xl font-bold">5</h3>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-[#10B981]" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">On Track</p>
                  <h3 className="text-2xl font-bold">3 Goals</h3>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-[#F59E0B]" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Monthly SIP</p>
                  <h3 className="text-2xl font-bold">₹65,000</h3>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Goals List */}
        <div className="grid grid-cols-1 gap-6">
          {goals.map((goal) => {
            const progress = (goal.current / goal.target) * 100
            const remaining = goal.target - goal.current
            const monthsToGo = Math.ceil(remaining / goal.monthly)
            
            return (
              <Card key={goal.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Goal Icon & Info */}
                    <div className="flex items-start gap-4 flex-1">
                      <div className="text-4xl">{goal.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{goal.name}</h3>
                          <Badge 
                            variant={
                              goal.status === 'on-track' ? 'default' :
                              goal.status === 'ahead' ? 'default' :
                              'destructive'
                            }
                            className={
                              goal.status === 'ahead' ? 'bg-green-100 text-green-700 hover:bg-green-200' : ''
                            }
                          >
                            {goal.status === 'on-track' ? 'On Track' :
                             goal.status === 'ahead' ? 'Ahead' :
                             'Behind Schedule'}
                          </Badge>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="mb-4">
                          <div className="flex justify-between text-sm mb-2">
                            <span className="font-medium text-gray-700">
                              ₹{goal.current.toLocaleString()} / ₹{goal.target.toLocaleString()}
                            </span>
                            <span className="font-semibold text-[#1A73E8]">{progress.toFixed(1)}%</span>
                          </div>
                          <Progress value={progress} className="h-2" />
                        </div>

                        {/* Goal Details */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                          <div>
                            <p className="text-gray-500 mb-1">Remaining</p>
                            <p className="font-semibold text-gray-900">₹{remaining.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-gray-500 mb-1">Monthly SIP</p>
                            <p className="font-semibold text-gray-900">₹{goal.monthly.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-gray-500 mb-1">Time Left</p>
                            <p className="font-semibold text-gray-900">{monthsToGo} months</p>
                          </div>
                          <div>
                            <p className="text-gray-500 mb-1">Target Date</p>
                            <p className="font-semibold text-gray-900">{goal.deadline}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex lg:flex-col gap-2 lg:justify-center">
                      <Button variant="outline" size="sm" className="flex-1 lg:flex-none">
                        View Details
                      </Button>
                      <Button size="sm" className="flex-1 lg:flex-none">
                        Increase SIP
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Goal Suggestions */}
        <Card>
          <CardHeader>
            <CardTitle>Suggested Goals</CardTitle>
            <p className="text-sm text-gray-600">Based on your profile and spending patterns</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg border-2 border-dashed border-gray-300 hover:border-[#1A73E8] transition-colors cursor-pointer">
                <div className="text-3xl mb-2">🏠</div>
                <h4 className="font-semibold mb-1">Home Down Payment</h4>
                <p className="text-sm text-gray-600 mb-3">Save for your dream home</p>
                <Button variant="outline" size="sm" className="w-full">
                  <Plus className="w-4 h-4 mr-1" />
                  Create Goal
                </Button>
              </div>
              <div className="p-4 rounded-lg border-2 border-dashed border-gray-300 hover:border-[#1A73E8] transition-colors cursor-pointer">
                <div className="text-3xl mb-2">🚗</div>
                <h4 className="font-semibold mb-1">Car Purchase</h4>
                <p className="text-sm text-gray-600 mb-3">Plan for your next vehicle</p>
                <Button variant="outline" size="sm" className="w-full">
                  <Plus className="w-4 h-4 mr-1" />
                  Create Goal
                </Button>
              </div>
              <div className="p-4 rounded-lg border-2 border-dashed border-gray-300 hover:border-[#1A73E8] transition-colors cursor-pointer">
                <div className="text-3xl mb-2">💍</div>
                <h4 className="font-semibold mb-1">Wedding Planning</h4>
                <p className="text-sm text-gray-600 mb-3">Save for your special day</p>
                <Button variant="outline" size="sm" className="w-full">
                  <Plus className="w-4 h-4 mr-1" />
                  Create Goal
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
