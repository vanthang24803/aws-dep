require('dotenv/config');

const schema = require('@/schema');
const { neon } = require('@neondatabase/serverless');
const { drizzle } = require('drizzle-orm/neon-http');

const sql = neon(process.env.DATABASE_URL);
const db = drizzle(sql, { schema, logger: true });

module.exports = db;
