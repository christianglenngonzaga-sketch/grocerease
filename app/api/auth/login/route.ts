import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import pool from "@/lib/db"
import { signToken } from "@/lib/auth"

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()
    if (!email || !password) return NextResponse.json({ error: "missing" }, { status: 400 })

    const [rows] = await pool.execute("SELECT id, password_hash, first_name, last_name FROM users WHERE email = ?", [email])
    const user = (rows as any[])[0]
    if (!user) return NextResponse.json({ error: "invalid credentials" }, { status: 401 })

    const ok = await bcrypt.compare(password, user.password_hash)
    if (!ok) return NextResponse.json({ error: "invalid credentials" }, { status: 401 })

    const token = signToken({ userId: user.id })
    return NextResponse.json({ user: { id: user.id, email, first_name: user.first_name, last_name: user.last_name }, token })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "server error" }, { status: 500 })
  }
}
