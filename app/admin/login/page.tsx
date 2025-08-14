'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Heart, Lock } from 'lucide-react'

export default function AdminLogin() {
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      })

      if (response.ok) {
        router.push('/admin/dashboard')
      } else {
        const data = await response.json()
        setError(data.error || 'Login failed')
      }
    } catch (error) {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-100 via-cream-200 to-gold-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-8 w-8 text-warm-600 mr-2" />
            <Lock className="h-6 w-6 text-warm-500" />
          </div>
          <CardTitle className="text-2xl font-serif text-warm-800">Admin Login</CardTitle>
          <CardDescription>
            Access the wedding RSVP management dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-warm-700 mb-1">
                Username
              </label>
              <Input
                type="text"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                required
                className="border-warm-300 focus:border-warm-500 focus:ring-warm-500/20"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-warm-700 mb-1">
                Password
              </label>
              <Input
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                required
                className="border-warm-300 focus:border-warm-500 focus:ring-warm-500/20"
              />
            </div>
            {error && (
              <div className="text-red-600 text-sm text-center bg-red-50 p-2 rounded">
                {error}
              </div>
            )}
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-warm-600 hover:bg-warm-700 text-white"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>
          <div className="mt-6 text-center">
            <button
              onClick={() => router.push('/')}
              className="text-warm-600 hover:text-warm-700 text-sm"
            >
              ← Back to Wedding Site
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}