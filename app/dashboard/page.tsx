"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import DashboardHeader from "@/components/dashboard/dashboard-header"
import OverviewCards from "@/components/dashboard/overview-cards"
import GroceryList from "@/components/dashboard/grocery-list"
import AddItemModal from "@/components/dashboard/add-item-modal"
import { Toaster, toast } from "sonner"

interface Item {
  id: number
  name: string
  quantity: number
  quantity_unit: string
  category_id: number
  purchased: boolean
  notes?: string
  priority: "low" | "medium" | "high"
}

interface Category {
  id: number
  name: string
  color: string
}

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [items, setItems] = useState<Item[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [showAddModal, setShowAddModal] = useState(false)
  const [editingItem, setEditingItem] = useState<Item | null>(null)
  const [filter, setFilter] = useState<"all" | "purchased" | "pending">("all")

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token")
      if (!token) {
        router.push("/auth/login")
        return
      }

      try {
        const [userRes, itemsRes, categoriesRes] = await Promise.all([
          fetch("/api/auth/me", { headers: { Authorization: `Bearer ${token}` } }),
          fetch("/api/items", { headers: { Authorization: `Bearer ${token}` } }),
          fetch("/api/categories", { headers: { Authorization: `Bearer ${token}` } }),
        ])

        // normalize user response (could be { user: {...} } or user object)
        if (userRes.ok) {
          const userJson = await userRes.json()
          setUser(userJson?.user ?? userJson ?? null)
        }

        // normalize items response (could be array or { items: [...] })
        if (itemsRes.ok) {
          const itemsJson = await itemsRes.json()
          const itemsArray = Array.isArray(itemsJson)
            ? itemsJson
            : Array.isArray(itemsJson?.items)
            ? itemsJson.items
            : []
          setItems(itemsArray)
        }

        // normalize categories response (could be array or { categories: [...] })
        if (categoriesRes.ok) {
          const catsJson = await categoriesRes.json()
          const catsArray = Array.isArray(catsJson)
            ? catsJson
            : Array.isArray(catsJson?.categories)
            ? catsJson.categories
            : []
          setCategories(catsArray)
        }
      } catch (err) {
        console.error("Error fetching data:", err)
        toast.error("Failed to load data")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [router])

  const handleAddItem = async (itemData: any) => {
    const token = localStorage.getItem("token")
    try {
      if (editingItem) {
        const res = await fetch(`/api/items/${editingItem.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(itemData),
        })

        if (res.ok) {
          const payload = await res.json()
          const updatedItem = payload?.item ?? payload
          setItems(items.map((item) => (item.id === editingItem.id ? updatedItem : item)))
          toast.success("Item updated successfully!")
          setEditingItem(null)
          setShowAddModal(false)
        }
      } else {
        const res = await fetch("/api/items", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(itemData),
        })

        if (res.ok) {
          const payload = await res.json()
          const newItem = payload?.item ?? payload
          setItems([...items, newItem])
          toast.success("Item added successfully!")
          setShowAddModal(false)
        }
      }
    } catch (err) {
      toast.error(editingItem ? "Failed to update item" : "Failed to add item")
    }
  }

  const handleTogglePurchased = async (id: number, purchased: boolean) => {
    const token = localStorage.getItem("token")
    if (!token) {
      router.push("/auth/login")
      return
    }

    // optimistic update
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, purchased: !purchased } : it)))

    try {
      const res = await fetch(`/api/items/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ purchased: !purchased }),
      })

      if (!res.ok) {
        // revert optimistic update
        setItems((prev) => prev.map((it) => (it.id === id ? { ...it, purchased } : it)))
        if (res.status === 401) {
          router.push("/auth/login")
          return
        }
        const err = await res.json().catch(() => ({}))
        toast.error(err?.error ?? "Failed to update item")
        return
      }

      // use server response to keep state in sync (route returns { item })
      const payload = await res.json().catch(() => null)
      const updated = payload?.item ?? null
      if (updated) {
        setItems((prev) => prev.map((it) => (it.id === id ? updated : it)))
      }
    } catch (err) {
      // revert optimistic update
      setItems((prev) => prev.map((it) => (it.id === id ? { ...it, purchased } : it)))
      toast.error("Failed to update item")
    }
  }

  const handleDeleteItem = async (id: number) => {
    const token = localStorage.getItem("token")
    try {
      const res = await fetch(`/api/items/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      })

      if (res.ok) {
        setItems(items.filter((item) => item.id !== id))
        toast.success("Item deleted")
      }
    } catch (err) {
      toast.error("Failed to delete item")
    }
  }

  const handleEditItem = (item: Item) => {
    setEditingItem(item)
    setShowAddModal(true)
  }

  const handleCloseModal = () => {
    setShowAddModal(false)
    setEditingItem(null)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-text-secondary">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  // ensure items/categories are arrays
  const itemsList = Array.isArray(items) ? items : []
  const categoriesList = Array.isArray(categories) ? categories : []

  const totalItems = itemsList.length
  const pendingItemsArr = itemsList.filter((i) => !i.purchased)
  const purchasedItemsArr = itemsList.filter((i) => !!i.purchased)

  return (
    <div className="min-h-screen bg-background">
      <Toaster position="top-center" />

      <DashboardHeader user={user} />

      <main className="max-w-6xl mx-auto px-4 py-8">
        <OverviewCards
          totalItems={totalItems}
          pendingItems={pendingItemsArr.length}
          purchasedItems={purchasedItemsArr.length}
          categories={categoriesList.length}
        />

        <GroceryList
          items={itemsList}
          categories={categoriesList}
          filter={filter}
          onFilterChange={setFilter}
          onTogglePurchased={handleTogglePurchased}
          onDeleteItem={handleDeleteItem}
          onEditItem={handleEditItem}
          onAddItem={() => setShowAddModal(true)}
        />
      </main>

      {showAddModal && (
        <AddItemModal
          categories={categoriesList}
          onClose={handleCloseModal}
          onAdd={handleAddItem}
          editingItem={editingItem}
        />
      )}
    </div>
  )
}
