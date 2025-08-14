import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';
const JWT_SECRET = process.env.JWT_SECRET || 'your-jwt-secret';

export async function verifyAdmin(username: string, password: string): Promise<boolean> {
  if (username !== ADMIN_USERNAME) return false;
  
  // In production, you should hash the password in the environment variable
  // For now, we'll do a simple comparison
  return password === ADMIN_PASSWORD;
}

export function generateToken(username: string): string {
  return jwt.sign({ username }, JWT_SECRET, { expiresIn: '24h' });
}

export function verifyToken(token: string): { username: string } | null {
  try {
    return jwt.verify(token, JWT_SECRET) as { username: string };
  } catch {
    return null;
  }
}