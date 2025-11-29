import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import pool from "@/lib/db"
import { signToken } from "@/lib/auth"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { email, password, first_name = null, last_name = null } = body

    if (!email || !password) {
      return NextResponse.json({ error: "email and password required" }, { status: 400 })
    }

    const [existing] = await pool.execute("SELECT id FROM users WHERE email = ?", [email])
    if ((existing as any[]).length > 0) {
      return NextResponse.json({ error: "email already registered" }, { status: 409 })
    }

    const hash = await bcrypt.hash(password, 10)
    const [res] = await pool.execute(
      "INSERT INTO users (email, password_hash, first_name, last_name) VALUES (?, ?, ?, ?)",
      [email, hash, first_name, last_name]
    )

    const userId = (res as any).insertId

    // copy all default_categories into the new user's categories (idempotent, will not duplicate)
    await pool.execute(
      "INSERT IGNORE INTO categories (user_id, name, color, icon) SELECT ?, name, color, icon FROM default_categories",
      [userId]
    )

    const token = signToken({ userId })

    return NextResponse.json(
      { user: { id: userId, email, first_name, last_name }, token },
      { status: 201 }
    )
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "server error" }, { status: 500 })
  }
}
