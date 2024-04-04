const { Pool } = require('pg');

const pool = new Pool({
  user: 'bhuvan',
  host: 'localhost',
  database: 'yfood_delivery_app',
  password: '1234',
  port: 5432, // Default PostgreSQL port
});

module.exports = pool;