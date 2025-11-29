"use client"

import { ShoppingBag, CheckCircle, ListTodo, Tag } from "lucide-react"

interface OverviewCardsProps {
  totalItems: number
  pendingItems: number
  purchasedItems: number
  categories: number
}

export default function OverviewCards({ totalItems, pendingItems, purchasedItems, categories }: OverviewCardsProps) {
  const cards = [
    {
      title: "Total Items",
      value: totalItems,
      icon: ShoppingBag,
      color: "primary",
      bgColor: "primary-light",
    },
    {
      title: "Pending",
      value: pendingItems,
      icon: ListTodo,
      color: "info",
      bgColor: "secondary-light",
    },
    {
      title: "Purchased",
      value: purchasedItems,
      icon: CheckCircle,
      color: "success",
      bgColor: "primary-light",
    },
    {
      title: "Categories",
      value: categories,
      icon: Tag,
      color: "warning",
      bgColor: "warning",
    },
  ]

  return (
    <div className="grid md:grid-cols-4 gap-4 mb-8">
      {cards.map((card, idx) => {
        const Icon = card.icon
        return (
          <div
            key={idx}
            className="bg-surface border border-border-light rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-text-secondary text-sm font-medium">{card.title}</p>
                <p className="text-3xl font-bold text-text-primary mt-2">{card.value}</p>
              </div>
              <div className={`p-3 rounded-lg bg-${card.bgColor}`}>
                <Icon className={`w-6 h-6 text-${card.color}`} />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
