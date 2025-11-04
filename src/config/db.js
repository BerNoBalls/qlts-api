// src/config/db.js
const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',       // your PostgreSQL server
  user: 'postgres',        // your DB username
  password: '123',         // your DB password
  database: 'qlts_db',     // your database name
  port: 5432               // default PostgreSQL port
});

pool.connect()
  .then(() => console.log('✅ Connected to PostgreSQL database'))
  .catch(err => console.error('❌ Database connection error:', err));

module.exports = pool;
