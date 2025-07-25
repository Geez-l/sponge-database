const { Pool } = require('pg')
require ('dotenv').config();

// PG connection pool setup
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: String(process.env.DB_PASSWORD),
    port: process.env.DB_PORT,
    ssl: process.env.DB_SSL === 'true' ? {rejectUnauthorized:false} : false,
    // ssl: false,
});

module.exports = pool;
console.log("DB_USER:", process.env.DB_USER);