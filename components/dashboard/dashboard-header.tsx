"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import { ShoppingCart, LogOut, Settings } from "lucide-react"
import { useState } from "react"

export default function DashboardHeader({ user }: { user: any }) {
  const router = useRouter()
  const [showMenu, setShowMenu] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem("token")
    router.push("/")
  }

  return (
    <header className="bg-surface border-b border-border-light sticky top-0 z-40 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="bg-primary rounded-lg p-2">
            <ShoppingCart className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-primary">GrocerEase</h1>
        </Link>

        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="flex items-center gap-3 px-4 py-2 hover:bg-surface-secondary rounded-lg transition-colors"
          >
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
              {user?.first_name?.[0]}
              {user?.last_name?.[0]}
            </div>
            <div className="text-left hidden sm:block">
              <p className="text-sm font-semibold text-text-primary">
                {user?.first_name} {user?.last_name}
              </p>
              <p className="text-xs text-text-secondary">{user?.email}</p>
            </div>
          </button>

          {showMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-surface border border-border rounded-xl shadow-lg animate-slide-in-up">
              <Link
                href="/dashboard/settings"
                className="flex items-center gap-3 px-4 py-3 hover:bg-surface-secondary text-text-primary transition-colors"
              >
                <Settings className="w-4 h-4" />
                <span>Settings</span>
              </Link>
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-surface-secondary text-error transition-colors border-t border-border-light"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
