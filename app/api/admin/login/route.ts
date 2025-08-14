import { NextRequest, NextResponse } from 'next/server';
import { verifyAdmin, generateToken } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    if (await verifyAdmin(username, password)) {
      const token = generateToken(username);
      
      const response = NextResponse.json({ success: true });
      response.cookies.set('admin-token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 // 24 hours
      });
      
      return response;
    } else {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Login failed' },
      { status: 500 }
    );
  }
}