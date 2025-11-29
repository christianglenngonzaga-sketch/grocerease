"use client"

import Link from "next/link"
import { ShoppingCart, Leaf, Zap, Lock } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navigation */}
      <nav className="border-b border-border-light bg-surface sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-primary">GrocerEase</span>
          </div>
          <div className="flex gap-3">
            <Link
              href="/auth/login"
              className="px-6 py-2 text-text-primary hover:text-primary font-medium transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/auth/register"
              className="px-6 py-2 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-3xl mx-auto text-center animate-slide-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-6 text-balance">
            Grocery Tracking Made <span className="text-primary">Simple</span>
          </h1>
          <p className="text-xl text-text-secondary mb-8 text-balance">
            Organize your grocery lists, track what you've bought, and never miss an item. GrocerEase makes shopping
            easier, smarter, and more organized.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/auth/register"
              className="px-8 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-all hover:shadow-lg"
            >
              Start Free Today
            </Link>
            <Link
              href="/auth/login"
              className="px-8 py-3 border-2 border-border text-text-primary rounded-xl font-semibold hover:border-primary transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-surface-secondary py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-text-primary mb-16">Why Choose GrocerEase?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-primary-light rounded-xl w-14 h-14 flex items-center justify-center mb-4">
                <Leaf className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Smart Organization</h3>
              <p className="text-text-secondary">
                Categorize items, add notes, and set priorities to keep everything organized.
              </p>
            </div>
            <div className="bg-surface rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-secondary-light rounded-xl w-14 h-14 flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Quick Updates</h3>
              <p className="text-text-secondary">Check items off as you shop with smooth, intuitive interactions.</p>
            </div>
            <div className="bg-surface rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-warning rounded-xl w-14 h-14 flex items-center justify-center mb-4">
                <Lock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Secure & Private</h3>
              <p className="text-text-secondary">Your grocery data is encrypted and only accessible to you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border-light bg-surface py-8 px-4 mt-auto">
        <div className="max-w-6xl mx-auto text-center text-text-secondary">
          <p>&copy; 2025 GrocerEase. Smart, simple grocery tracking.</p>
        </div>
      </footer>
    </div>
  )
}
