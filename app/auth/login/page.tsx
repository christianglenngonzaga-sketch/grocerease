"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ShoppingCart, Mail, Lock } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || "Login failed")
        return
      }

      localStorage.setItem("token", data.token)
      router.push("/dashboard")
    } catch (err) {
      setError("An error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="animate-slide-in-up">
      <div className="bg-surface rounded-2xl shadow-xl p-8 border border-border-light">
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="bg-primary rounded-lg p-2">
            <ShoppingCart className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-primary">GrocerEase</h1>
        </div>

        <h2 className="text-2xl font-bold text-text-primary mb-2">Welcome Back</h2>
        <p className="text-text-secondary mb-6">Sign in to manage your grocery lists</p>

        {error && (
          <div className="bg-error/10 border border-error text-error px-4 py-3 rounded-xl mb-6 text-sm">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-text-light" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-text-light" />
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-2 rounded-xl font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <p className="text-center text-text-secondary mt-6">
          Don't have an account?{" "}
          <Link href="/register" className="text-primary font-semibold hover:text-primary-dark">
            Create one
          </Link>
        </p>
      </div>
    </div>
  )
}
