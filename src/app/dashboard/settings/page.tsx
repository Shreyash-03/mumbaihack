"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { User, Bell, Shield, CreditCard, Smartphone, Mail, Lock, Eye, Plus } from 'lucide-react'
import DashboardLayout from '@/components/DashboardLayout'

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="p-4 lg:p-8 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-1">Manage your account preferences and settings</p>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 h-auto">
            <TabsTrigger value="profile" className="gap-2">
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">Profile</span>
            </TabsTrigger>
            <TabsTrigger value="notifications" className="gap-2">
              <Bell className="w-4 h-4" />
              <span className="hidden sm:inline">Notifications</span>
            </TabsTrigger>
            <TabsTrigger value="security" className="gap-2">
              <Shield className="w-4 h-4" />
              <span className="hidden sm:inline">Security</span>
            </TabsTrigger>
            <TabsTrigger value="payment" className="gap-2">
              <CreditCard className="w-4 h-4" />
              <span className="hidden sm:inline">Payment</span>
            </TabsTrigger>
            <TabsTrigger value="preferences" className="gap-2">
              <Smartphone className="w-4 h-4" />
              <span className="hidden sm:inline">Preferences</span>
            </TabsTrigger>
          </TabsList>

          {/* Profile Settings */}
          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <p className="text-sm text-gray-600">Update your personal information</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6">
                  <Avatar className="w-20 h-20">
                    <AvatarFallback className="bg-gradient-to-br from-[#1A73E8] to-[#06B6D4] text-white text-2xl">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm">Change Photo</Button>
                    <p className="text-xs text-gray-500">JPG, PNG or GIF. Max size 2MB</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue="john.doe@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" defaultValue="+91 98765 43210" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input id="dob" type="date" defaultValue="1990-01-15" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pan">PAN Number</Label>
                    <Input id="pan" defaultValue="ABCDE1234F" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" defaultValue="123 Finance Street, Mumbai, MH 400001" />
                </div>

                <div className="flex justify-end gap-3">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save Changes</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Investment Profile</CardTitle>
                <p className="text-sm text-gray-600">Your investment preferences and risk profile</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="riskProfile">Risk Tolerance</Label>
                  <select id="riskProfile" className="w-full h-10 px-3 rounded-md border border-input bg-background">
                    <option>Conservative</option>
                    <option selected>Moderate</option>
                    <option>Aggressive</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="investmentGoal">Primary Investment Goal</Label>
                  <select id="investmentGoal" className="w-full h-10 px-3 rounded-md border border-input bg-background">
                    <option selected>Wealth Creation</option>
                    <option>Retirement Planning</option>
                    <option>Child Education</option>
                    <option>Home Purchase</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="investmentHorizon">Investment Horizon</Label>
                  <select id="investmentHorizon" className="w-full h-10 px-3 rounded-md border border-input bg-background">
                    <option>1-3 years</option>
                    <option selected>3-5 years</option>
                    <option>5-10 years</option>
                    <option>10+ years</option>
                  </select>
                </div>

                <div className="flex justify-end">
                  <Button>Update Profile</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications */}
          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Email Notifications</CardTitle>
                <p className="text-sm text-gray-600">Manage your email notification preferences</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b">
                  <div className="space-y-1">
                    <p className="font-medium">Portfolio Updates</p>
                    <p className="text-sm text-gray-600">Get daily portfolio performance summaries</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between py-3 border-b">
                  <div className="space-y-1">
                    <p className="font-medium">Goal Milestones</p>
                    <p className="text-sm text-gray-600">Notifications when you reach goal milestones</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between py-3 border-b">
                  <div className="space-y-1">
                    <p className="font-medium">Market Alerts</p>
                    <p className="text-sm text-gray-600">Important market news and updates</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between py-3 border-b">
                  <div className="space-y-1">
                    <p className="font-medium">SIP Reminders</p>
                    <p className="text-sm text-gray-600">Reminders for upcoming SIP payments</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between py-3">
                  <div className="space-y-1">
                    <p className="font-medium">Marketing Emails</p>
                    <p className="text-sm text-gray-600">Promotional offers and new features</p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Push Notifications</CardTitle>
                <p className="text-sm text-gray-600">Manage mobile and browser notifications</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b">
                  <div className="space-y-1">
                    <p className="font-medium">Transaction Alerts</p>
                    <p className="text-sm text-gray-600">Instant alerts for all transactions</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between py-3 border-b">
                  <div className="space-y-1">
                    <p className="font-medium">Price Alerts</p>
                    <p className="text-sm text-gray-600">NAV changes and price movements</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between py-3">
                  <div className="space-y-1">
                    <p className="font-medium">Weekly Reports</p>
                    <p className="text-sm text-gray-600">Weekly portfolio performance reports</p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security */}
          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Password & Security</CardTitle>
                <p className="text-sm text-gray-600">Manage your password and security settings</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input id="currentPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input id="newPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input id="confirmPassword" type="password" />
                </div>
                <div className="flex justify-end">
                  <Button>Update Password</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Two-Factor Authentication</CardTitle>
                <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Smartphone className="w-5 h-5 text-[#1A73E8]" />
                    </div>
                    <div>
                      <p className="font-medium">SMS Authentication</p>
                      <p className="text-sm text-gray-600">Receive codes via SMS</p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between py-3 border-b">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-[#10B981]" />
                    </div>
                    <div>
                      <p className="font-medium">Email Authentication</p>
                      <p className="text-sm text-gray-600">Receive codes via email</p>
                    </div>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Lock className="w-5 h-5 text-[#8B5CF6]" />
                    </div>
                    <div>
                      <p className="font-medium">Authenticator App</p>
                      <p className="text-sm text-gray-600">Use Google Authenticator or similar</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Setup</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Active Sessions</CardTitle>
                <p className="text-sm text-gray-600">Manage your active login sessions</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                  <div>
                    <p className="font-medium">Chrome on Windows</p>
                    <p className="text-sm text-gray-600">Mumbai, India • Active now</p>
                  </div>
                  <span className="text-xs text-green-600 font-medium">Current</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                  <div>
                    <p className="font-medium">Safari on iPhone</p>
                    <p className="text-sm text-gray-600">Mumbai, India • 2 hours ago</p>
                  </div>
                  <Button variant="ghost" size="sm" className="text-red-600">Revoke</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Payment Methods */}
          <TabsContent value="payment" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Bank Accounts</CardTitle>
                <p className="text-sm text-gray-600">Manage your linked bank accounts</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg border-2 border-[#1A73E8] bg-blue-50">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-[#1A73E8]" />
                    </div>
                    <div>
                      <p className="font-semibold">HDFC Bank</p>
                      <p className="text-sm text-gray-600">Account ending in 4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">Primary</span>
                    <Button variant="ghost" size="sm">Edit</Button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-semibold">ICICI Bank</p>
                      <p className="text-sm text-gray-600">Account ending in 8901</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">Set Primary</Button>
                    <Button variant="ghost" size="sm" className="text-red-600">Remove</Button>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Bank Account
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment History</CardTitle>
                <p className="text-sm text-gray-600">Your recent transactions</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { date: '15 Jan 2024', desc: 'SIP - HDFC Equity Fund', amount: '₹5,000', status: 'Success' },
                    { date: '10 Jan 2024', desc: 'One-time - ICICI Bluechip', amount: '₹10,000', status: 'Success' },
                    { date: '05 Jan 2024', desc: 'SIP - Axis Midcap Fund', amount: '₹3,000', status: 'Success' },
                  ].map((txn, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50">
                      <div>
                        <p className="font-medium">{txn.desc}</p>
                        <p className="text-sm text-gray-600">{txn.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{txn.amount}</p>
                        <span className="text-xs text-green-600">{txn.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Preferences */}
          <TabsContent value="preferences" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Display Settings</CardTitle>
                <p className="text-sm text-gray-600">Customize your app appearance</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b">
                  <div className="space-y-1">
                    <p className="font-medium">Dark Mode</p>
                    <p className="text-sm text-gray-600">Switch to dark theme</p>
                  </div>
                  <Switch />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language">Language</Label>
                  <select id="language" className="w-full h-10 px-3 rounded-md border border-input bg-background">
                    <option selected>English</option>
                    <option>हिन्दी (Hindi)</option>
                    <option>मराठी (Marathi)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currency">Currency Display</Label>
                  <select id="currency" className="w-full h-10 px-3 rounded-md border border-input bg-background">
                    <option selected>₹ INR (Indian Rupee)</option>
                    <option>$ USD (US Dollar)</option>
                  </select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data & Privacy</CardTitle>
                <p className="text-sm text-gray-600">Control your data and privacy settings</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b">
                  <div className="space-y-1">
                    <p className="font-medium">Share Analytics</p>
                    <p className="text-sm text-gray-600">Help us improve with usage data</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between py-3 border-b">
                  <div className="space-y-1">
                    <p className="font-medium">Personalized Recommendations</p>
                    <p className="text-sm text-gray-600">Get AI-powered investment suggestions</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="pt-3 space-y-2">
                  <Button variant="outline" className="w-full">Download My Data</Button>
                  <Button variant="destructive" className="w-full">Delete My Account</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}