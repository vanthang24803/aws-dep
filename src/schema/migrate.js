require('dotenv/config');

const { neon } = require('@neondatabase/serverless');
const { drizzle } = require('drizzle-orm/neon-http');
const { migrate } = require('drizzle-orm/neon-http/migrator');

const sql = neon(process.env.DATABASE_URL);

const db = drizzle(sql);

async function main() {
  try {
    await migrate(db, {
      migrationsFolder: './migrations',
    });

    console.log('Migration Successfully!');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

main();
