import jwt from "jsonwebtoken"

const SECRET = process.env.JWT_SECRET ?? "change-this-secret"

export function signToken(payload: object): string {
  return jwt.sign(payload, SECRET, { expiresIn: "7d" })
}

export function verifyToken(token?: string): any | null {
  if (!token) return null
  try {
    const t = token.replace(/^Bearer\s+/i, "")
    return jwt.verify(t, SECRET) as any
  } catch {
    return null
  }
}