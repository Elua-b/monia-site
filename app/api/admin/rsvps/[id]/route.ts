import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { rsvps } from '@/lib/db/schema';
import { verifyToken } from '@/lib/auth';
import { eq } from 'drizzle-orm';

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Verify admin token
    const token = request.cookies.get('admin-token')?.value;
    if (!token || !verifyToken(token)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const id = parseInt(params.id);
    if (isNaN(id)) {
      return NextResponse.json(
        { error: 'Invalid RSVP ID' },
        { status: 400 }
      );
    }

    // Delete the RSVP
    const result = await db
      .delete(rsvps)
      .where(eq(rsvps.id, id))
      .returning();

    if (result.length === 0) {
      return NextResponse.json(
        { error: 'RSVP not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting RSVP:', error);
    return NextResponse.json(
      { error: 'Failed to delete RSVP' },
      { status: 500 }
    );
  }
}