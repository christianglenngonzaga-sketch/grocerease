"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ShoppingCart, Mail, Lock, User } from "lucide-react"

export default function RegisterPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match")
      setLoading(false)
      return
    }

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          password: form.password,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || "Registration failed")
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
      <div className="bg-card rounded-2xl shadow-lg p-8 border border-border">
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="bg-primary rounded-lg p-2">
            <ShoppingCart className="w-6 h-6 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-bold text-primary">GrocerEase</h1>
        </div>

        <h2 className="text-2xl font-bold text-foreground mb-2">Create Account</h2>
        <p className="text-muted-foreground mb-6">Join GrocerEase and start organizing your shopping</p>

        {error && (
          <div className="bg-destructive/10 border border-destructive text-destructive px-4 py-3 rounded-xl mb-6 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-input focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-foreground"
                  placeholder="John"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-input focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-foreground"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-input focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-foreground"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-input focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-foreground"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Confirm Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-input focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-foreground"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-primary-foreground py-2 rounded-xl font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <p className="text-center text-muted-foreground mt-6">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-primary font-semibold hover:text-primary/90">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}
