"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X, Plus } from "lucide-react"

interface AddItemModalProps {
  categories: any[]
  onClose: () => void
  onAdd: (item: any) => void
  editingItem?: any | null
}

export default function AddItemModal({ categories, onClose, onAdd, editingItem }: AddItemModalProps) {
  const [form, setForm] = useState({
    name: "",
    quantity: 1,
    quantity_unit: "pcs",
    category_id: "",
    priority: "medium",
    notes: "",
  })

  useEffect(() => {
    if (editingItem) {
      setForm({
        name: editingItem.name,
        quantity: editingItem.quantity,
        quantity_unit: editingItem.quantity_unit,
        category_id: editingItem.category_id || "",
        priority: editingItem.priority,
        notes: editingItem.notes || "",
      })
    }
  }, [editingItem])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (form.name.trim()) {
      onAdd({
        ...form,
        category_id: form.category_id ? Number.parseInt(form.category_id) : null,
      })
      setForm({
        name: "",
        quantity: 1,
        quantity_unit: "pcs",
        category_id: "",
        priority: "medium",
        notes: "",
      })
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white border-2 border-black rounded-2xl shadow-xl max-w-md w-full animate-slide-in-up">
        <div className="flex items-center justify-between p-6 border-b-2 border-black">
          <h2 className="text-xl font-bold text-black">{editingItem ? "Edit Item" : "Add New Item"}</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
            <X className="w-6 h-6 text-black" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-black mb-2">Item Name *</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="e.g., Organic Apples"
              className="w-full px-4 py-2 border-2 border-black text-black placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-black mb-2">Quantity</label>
              <input
                type="number"
                min="1"
                value={form.quantity}
                onChange={(e) => setForm({ ...form, quantity: Number.parseInt(e.target.value) })}
                className="w-full px-4 py-2 border-2 border-black text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-2">Unit</label>
              <select
                value={form.quantity_unit}
                onChange={(e) => setForm({ ...form, quantity_unit: e.target.value })}
                className="w-full px-4 py-2 border-2 border-black text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20"
              >
                <option>pcs</option>
                <option>kg</option>
                <option>liter</option>
                <option>dozen</option>
                <option>pack</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-2">Category</label>
            <select
              value={form.category_id}
              onChange={(e) => setForm({ ...form, category_id: e.target.value })}
              className="w-full px-4 py-2 border-2 border-black text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20"
            >
              <option value="">No Category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-2">Priority</label>
            <select
              value={form.priority}
              onChange={(e) => setForm({ ...form, priority: e.target.value })}
              className="w-full px-4 py-2 border-2 border-black text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-2">Notes</label>
            <textarea
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              placeholder="Optional notes..."
              className="w-full px-4 py-2 border-2 border-black text-black placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 resize-none"
              rows={3}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border-2 border-black text-black rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              <Plus className="w-5 h-5" />
              {editingItem ? "Update" : "Add"} Item
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
