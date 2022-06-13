const Pool = require('pg').Pool;
  
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'papp',
    password: 'Isecmar.22',
    dialect: 'postgres',
    port: 5432
});

module.exports = pool;
