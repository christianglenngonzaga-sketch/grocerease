import { NextResponse } from "next/server"
import pool from "@/lib/db"
import { verifyToken } from "@/lib/auth"

export async function GET(req: Request) {
  try {
    const auth = req.headers.get("authorization") ?? ""
    const payload = verifyToken(auth)
    if (!payload?.userId)
      return NextResponse.json({ error: "unauthorized" }, { status: 401 })

    const [rows] = await pool.execute(
      "SELECT id, email, first_name, last_name, created_at FROM users WHERE id = ?",
      [payload.userId]
    )
    const user = (rows as any[])[0]
    if (!user) return NextResponse.json({ error: "not found" }, { status: 404 })

    return NextResponse.json({ user })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "server error" }, { status: 500 })
  }
}
