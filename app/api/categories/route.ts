import { NextResponse } from "next/server"
import pool from "@/lib/db"
import { verifyToken } from "@/lib/auth"

export async function GET(req: Request) {
  try {
    const auth = req.headers.get("authorization") ?? ""
    const payload = verifyToken(auth)
    if (!payload?.userId) return NextResponse.json({ error: "unauthorized" }, { status: 401 })

    // Ensure user has all default categories (idempotent, no duplicates)
    await pool.execute(
      `INSERT IGNORE INTO categories (user_id, name, color, icon)
       SELECT ?, name, color, icon FROM default_categories
       WHERE name NOT IN (SELECT name FROM categories WHERE user_id = ?)`,

      [payload.userId, payload.userId]
    )

    const [rows] = await pool.execute(
      "SELECT id, name, color, icon, created_at FROM categories WHERE user_id = ? ORDER BY id",
      [payload.userId]
    )
    return NextResponse.json({ categories: rows })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "server error" }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const auth = req.headers.get("authorization") ?? ""
    const payload = verifyToken(auth)
    if (!payload?.userId) return NextResponse.json({ error: "unauthorized" }, { status: 401 })

    const body = await req.json()
    const { name, color = "#10B981", icon = "box" } = body
    if (!name) return NextResponse.json({ error: "name required" }, { status: 400 })

    const [res] = await pool.execute(
      "INSERT INTO categories (user_id, name, color, icon) VALUES (?, ?, ?, ?)",
      [payload.userId, name, color, icon]
    )
    const id = (res as any).insertId
    return NextResponse.json(
      { category: { id, user_id: payload.userId, name, color, icon } },
      { status: 201 }
    )
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "server error" }, { status: 500 })
  }
}
