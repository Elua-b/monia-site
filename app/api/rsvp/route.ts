import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { rsvps } from '@/lib/db/schema';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      name,
      email,
      phone,
      attendance,
      guests,
      guestNames,
      dietaryRestrictions,
      message
    } = body;

    // Validate required fields
    if (!name || !email || !attendance) {
      return NextResponse.json(
        { error: 'Name, email, and attendance are required' },
        { status: 400 }
      );
    }

    // Insert RSVP into database
    const result = await db.insert(rsvps).values({
      name,
      email,
      phone: phone || null,
      attendance,
      guests: parseInt(guests) || 1,
      guestNames: guestNames || null,
      dietaryRestrictions: dietaryRestrictions || null,
      message: message || null,
    }).returning();

    return NextResponse.json(
      { message: 'RSVP submitted successfully', id: result[0].id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting RSVP:', error);
    return NextResponse.json(
      { error: 'Failed to submit RSVP' },
      { status: 500 }
    );
  }
}