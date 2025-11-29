"use client"

import type React from "react"

import { useRouter } from "next/navigation"
import DashboardHeader from "@/components/dashboard/dashboard-header"
import { useState } from "react"
import { toast, Toaster } from "sonner"
import { Lock, Trash2, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function SettingsPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault()

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      toast.error("Passwords do not match")
      return
    }

    setLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 500))
      toast.success("Password changed successfully!")
      setPasswordForm({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      })
    } catch (err) {
      toast.error("Failed to change password")
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteAccount = async () => {
    if (!confirm("Are you sure? This action cannot be undone.")) return

    setLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 500))
      localStorage.removeItem("token")
      toast.success("Account deleted")
      router.push("/")
    } catch (err) {
      toast.error("Failed to delete account")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Toaster position="top-center" />

      <DashboardHeader user={user} />

      <main className="max-w-2xl mx-auto px-4 py-8">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 text-primary hover:text-primary-dark mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Dashboard
        </Link>

        <div className="bg-surface border border-border-light rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-text-primary mb-8">Settings</h1>

          {/* Change Password Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
              <Lock className="w-5 h-5" />
              Change Password
            </h2>

            <form onSubmit={handleChangePassword} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">Current Password</label>
                <input
                  type="password"
                  value={passwordForm.currentPassword}
                  onChange={(e) => setPasswordForm({ ...passwordForm, currentPassword: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">New Password</label>
                <input
                  type="password"
                  value={passwordForm.newPassword}
                  onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">Confirm New Password</label>
                <input
                  type="password"
                  value={passwordForm.confirmPassword}
                  onChange={(e) => setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50"
              >
                {loading ? "Updating..." : "Update Password"}
              </button>
            </form>
          </div>

          {/* Danger Zone */}
          <div className="border-t border-border-light pt-8">
            <h2 className="text-xl font-bold text-error mb-4 flex items-center gap-2">
              <Trash2 className="w-5 h-5" />
              Danger Zone
            </h2>

            <p className="text-text-secondary mb-4">
              Deleting your account will permanently remove all your data and cannot be undone.
            </p>

            <button
              onClick={handleDeleteAccount}
              disabled={loading}
              className="bg-error text-white px-6 py-2 rounded-lg font-semibold hover:bg-error opacity-80 hover:opacity-100 transition-all disabled:opacity-50"
            >
              {loading ? "Deleting..." : "Delete Account"}
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
