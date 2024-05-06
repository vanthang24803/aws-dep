const {
  varchar,
  pgTable,
  text,
  uuid,
  timestamp,
} = require('drizzle-orm/pg-core');

const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  firstName: varchar('first_name', { length: 255 }),
  lastName: varchar('last_name', { length: 255 }),
  password: varchar('password', { length: 255 }).notNull(),
  avatar: text('avatar'),
  createAt: timestamp('create_at').notNull().defaultNow(),
  updateAt: timestamp('update_at').notNull().defaultNow(),
});

module.exports = {
  users,
};
