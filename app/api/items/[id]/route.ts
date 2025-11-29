import { NextResponse } from "next/server"
import pool from "@/lib/db"
import { verifyToken } from "@/lib/auth"

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    const auth = req.headers.get("authorization") ?? ""
    const payload = verifyToken(auth)
    if (!payload?.userId) return NextResponse.json({ error: "unauthorized" }, { status: 401 })

    const id = Number(params.id)
    const body = await req.json()

    const fields: string[] = []
    const values: any[] = []

    for (const key of [
      "name",
      "quantity",
      "quantity_unit",
      "notes",
      "category_id",
      "purchased",
      "priority",
      "estimated_price",
    ]) {
      if (key in body) {
        if (key === "purchased") {
          const v = !!(body as any)[key]
          // set purchased and set/clear purchased_at atomically
          if (v) {
            fields.push(`purchased = ? , purchased_at = CURRENT_TIMESTAMP`)
            values.push(1)
          } else {
            fields.push(`purchased = ? , purchased_at = NULL`)
            values.push(0)
          }
        } else {
          fields.push(`${key} = ?`)
          values.push((body as any)[key])
        }
      }
    }

    if (fields.length === 0) return NextResponse.json({ error: "no fields to update" }, { status: 400 })

    values.push(payload.userId, id)
    const sql = `UPDATE items SET ${fields.join(", ")} WHERE user_id = ? AND id = ?`
    await pool.execute(sql, values)

    // return updated item
    const [rows] = await pool.execute("SELECT * FROM items WHERE user_id = ? AND id = ?", [payload.userId, id])
    const updated = (rows as any[])[0] ?? null

    return NextResponse.json({ item: updated })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "server error" }, { status: 500 })
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const auth = req.headers.get("authorization") ?? ""
    const payload = verifyToken(auth)
    if (!payload?.userId) return NextResponse.json({ error: "unauthorized" }, { status: 401 })

    const id = Number(params.id)
    const body = await req.json()

    const fields: string[] = []
    const values: any[] = []

    for (const key of [
      "name",
      "quantity",
      "quantity_unit",
      "notes",
      "category_id",
      "purchased",
      "priority",
      "estimated_price",
    ]) {
      if (key in body) {
        fields.push(`${key} = ?`)
        let v = (body as any)[key]
        if (key === "purchased") v = v ? 1 : 0
        values.push(v)
      }
    }

    if (fields.length === 0) return NextResponse.json({ error: "no fields to update" }, { status: 400 })

    values.push(payload.userId, id)
    const sql = `UPDATE items SET ${fields.join(", ")} WHERE user_id = ? AND id = ?`
    await pool.execute(sql, values)

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "server error" }, { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const auth = req.headers.get("authorization") ?? ""
    const payload = verifyToken(auth)
    if (!payload?.userId) return NextResponse.json({ error: "unauthorized" }, { status: 401 })

    const id = Number(params.id)
    await pool.execute("DELETE FROM items WHERE user_id = ? AND id = ?", [payload.userId, id])

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "server error" }, { status: 500 })
  }
}
