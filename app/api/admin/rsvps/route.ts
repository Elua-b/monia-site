import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { rsvps } from '@/lib/db/schema';
import { verifyToken } from '@/lib/auth';
import { desc } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    // Verify admin token
    const token = request.cookies.get('admin-token')?.value;
    if (!token || !verifyToken(token)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Fetch all RSVPs
    const allRsvps = await db
      .select()
      .from(rsvps)
      .orderBy(desc(rsvps.submittedAt));

    return NextResponse.json(allRsvps);
  } catch (error) {
    console.error('Error fetching RSVPs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch RSVPs' },
      { status: 500 }
    );
  }
}