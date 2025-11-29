import { NextResponse } from "next/server"
import pool from "@/lib/db"
import { verifyToken } from "@/lib/auth"

export async function GET(req: Request) {
  try {
    const auth = req.headers.get("authorization") ?? ""
    const payload = verifyToken(auth)
    if (!payload?.userId)
      return NextResponse.json({ error: "unauthorized" }, { status: 401 })

    const url = new URL(req.url)
    const filter = url.searchParams.get("filter") // all|purchased|pending
    let sql = "SELECT * FROM items WHERE user_id = ?"
    const params: any[] = [payload.userId]
    if (filter === "purchased") {
      sql += " AND purchased = 1"
    } else if (filter === "pending") {
      sql += " AND (purchased = 0 OR purchased IS NULL)"
    }
    sql += " ORDER BY created_at DESC"
    const [rows] = await pool.execute(sql, params)
    return NextResponse.json({ items: rows })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "server error" }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const auth = req.headers.get("authorization") ?? ""
    const payload = verifyToken(auth)
    if (!payload?.userId)
      return NextResponse.json({ error: "unauthorized" }, { status: 401 })

    const body = await req.json()
    const {
      name,
      quantity = 1,
      quantity_unit = "pcs",
      notes = null,
      category_id = null,
      purchased = false,
      priority = "medium",
      estimated_price = null,
    } = body

    if (!name)
      return NextResponse.json({ error: "name required" }, { status: 400 })

    const [res] = await pool.execute(
      `INSERT INTO items
      (user_id, category_id, name, quantity, quantity_unit, notes, purchased, priority, estimated_price)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        payload.userId,
        category_id,
        name,
        quantity,
        quantity_unit,
        notes,
        purchased ? 1 : 0,
        priority,
        estimated_price,
      ]
    )

    const id = (res as any).insertId
    return NextResponse.json(
      {
        item: {
          id,
          user_id: payload.userId,
          name,
          quantity,
          quantity_unit,
          category_id,
          notes,
          purchased,
          priority,
          estimated_price,
        },
      },
      { status: 201 }
    )
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "server error" }, { status: 500 })
  }
}
