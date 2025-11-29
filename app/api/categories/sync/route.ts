// ...new file...
import { NextResponse } from "next/server"
import pool from "@/lib/db"
import { verifyToken } from "@/lib/auth"

export async function POST(req: Request) {
  try {
    const auth = req.headers.get("authorization") ?? ""
    const payload = verifyToken(auth)
    if (!payload?.userId) return NextResponse.json({ error: "unauthorized" }, { status: 401 })

    // Insert any default_categories not yet present for this user. UNIQUE constraint prevents duplicates.
    const [result] = await pool.execute(
      "INSERT IGNORE INTO categories (user_id, name, color, icon) SELECT ?, name, color, icon FROM default_categories",
      [payload.userId]
    )

    // affectedRows indicates how many rows were inserted
    const affected = (result as any).affectedRows ?? 0
    return NextResponse.json({ success: true, inserted: affected })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "server error" }, { status: 500 })
  }
}
// ...new file...