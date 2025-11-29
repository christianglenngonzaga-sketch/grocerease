"use client"
import { Plus, Trash2, CheckCircle2, Circle } from "lucide-react"
import { motion } from "framer-motion"

interface GroceryListProps {
  items: any[]
  categories: any[]
  filter: string
  onFilterChange: (filter: "all" | "purchased" | "pending") => void
  onTogglePurchased: (id: number, purchased: boolean) => void
  onDeleteItem: (id: number) => void
  onEditItem: (item: any) => void
  onAddItem: () => void
}

export default function GroceryList({
  items,
  categories,
  filter,
  onFilterChange,
  onTogglePurchased,
  onDeleteItem,
  onEditItem,
  onAddItem,
}: GroceryListProps) {
  const getCategoryColor = (categoryId: number) => {
    const category = categories.find((c) => c.id === categoryId)
    return category?.color || "#10B981"
  }

  const getCategoryName = (categoryId: number) => {
    const category = categories.find((c) => c.id === categoryId)
    return category?.name || "Uncategorized"
  }

  const getPriorityColor = (priority: string) => {
    const colors: Record<string, string> = {
      high: "text-error",
      medium: "text-warning",
      low: "text-text-light",
    }
    return colors[priority] || "text-text-light"
  }

  return (
    <div className="bg-surface border border-border-light rounded-2xl p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-text-primary">Your Grocery List</h2>
          <p className="text-text-secondary text-sm mt-1">
            {items.length} {items.length === 1 ? "item" : "items"}
          </p>
        </div>
        <button
          onClick={onAddItem}
          className="flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-xl font-semibold hover:bg-primary-dark transition-colors w-full sm:w-auto justify-center"
        >
          <Plus className="w-5 h-5" />
          Add Item
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-6 border-b border-border-light pb-4">
        {["all", "pending", "purchased"].map((f) => (
          <button
            key={f}
            onClick={() => onFilterChange(f as any)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors capitalize ${
              filter === f ? "bg-primary text-white" : "text-text-secondary hover:bg-surface-secondary"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Items List */}
      <div className="space-y-2">
        {items.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-text-secondary">No items yet. Add one to get started!</p>
          </div>
        ) : (
          items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${
                item.purchased
                  ? "bg-surface-secondary border-border-light opacity-60"
                  : "bg-background border-border hover:border-primary"
              }`}
            >
              <button
                onClick={() => onTogglePurchased(item.id, item.purchased)}
                className="shrink-0 text-primary hover:text-primary-dark transition-colors"
              >
                {item.purchased ? <CheckCircle2 className="w-6 h-6" /> : <Circle className="w-6 h-6" />}
              </button>

              <div className="flex-1 min-w-0">
                <h3
                  className={`font-semibold ${item.purchased ? "line-through text-text-light" : "text-text-primary"}`}
                >
                  {item.name}
                </h3>
                <div className="flex items-center gap-2 mt-1 flex-wrap">
                  {item.category_id && (
                    <span
                      className="text-xs text-white px-3 py-1 rounded-full"
                      style={{ backgroundColor: getCategoryColor(item.category_id) }}
                    >
                      {getCategoryName(item.category_id)}
                    </span>
                  )}
                  <span className={`text-xs font-medium ${getPriorityColor(item.priority)}`}>{item.priority}</span>
                  {item.quantity && (
                    <span className="text-xs text-text-secondary">
                      {item.quantity} {item.quantity_unit || "pcs"}
                    </span>
                  )}
                </div>
              </div>

              {/* Edit and Delete Buttons */}
              <div className="flex gap-2 shrink-0">
                <button
                  onClick={() => onEditItem(item)}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  title="Edit item"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => onDeleteItem(item.id)}
                  className="p-2 text-text-light hover:text-error transition-colors hover:bg-error/10 rounded-lg"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  )
}
