const Pool = require("pg").Pool;
require('dotenv').config()

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: process.env.DB_NAME,
  password: 'postgres',
  dialect: process.env.DB_DIALECT,
  port: process.env.DB_PORT,
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error("Error acquiring client", err.stack);
  }
  client.query("SELECT NOW()", (err, result) => { 
  release(); 
    if (err) {
      return console.error("Error acquiring client", err.stack);
    }
    console.log(`Connected to Database ${pool.options.database}`);
  });
});

module.exports = pool
