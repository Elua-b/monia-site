import { pgTable, serial, text, integer, timestamp, varchar } from 'drizzle-orm/pg-core';

export const rsvps = pgTable('rsvps', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 50 }),
  attendance: varchar('attendance', { length: 50 }).notNull(),
  guests: integer('guests').default(1).notNull(),
  guestNames: text('guest_names'),
  dietaryRestrictions: text('dietary_restrictions'),
  message: text('message'),
  submittedAt: timestamp('submitted_at').defaultNow().notNull(),
});