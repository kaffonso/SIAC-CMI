require('dotenv').config();
//console.log(process.env.DB_PORT)

const Pool = require('pg').Pool //databse connection
const pool = new Pool({
    user: 'postgres',
    host:'localhost',
    database:process.env.DB_NAME,
    password:'postgres',
    dialect:'postgres',
    port:process.env.DB_PORT
})
pool.connect((err,client,release)=>{
    if(err){
        return console.error(`Error acquiring client ${err.stack}`)

    }
    client.query('SELECT NOW()',(err, result)=>{
        release()
        if(err){
            return console.error(`Error acquiring client ${err.stack}`)
        }
        console.log("Connected to Database")
    })
})
module.exports = pool