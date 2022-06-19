require('dotenv').config()  
const express = require('express');
const pool = require('./config/database')

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
const testRoutes = require('./routes/testdata');
pool.connect((err, client, release) => {
    if (err) {
        return console.error(
            'Error acquiring client', err.stack)
    }
    client.query('SELECT NOW()', (err, result) => {
        release()
        if (err) {
            return console.error(
                'Error executing query', err.stack)
        }
        console.log("Connected to Database !")
    })
})
  
app.use('/testdata',testRoutes );

const server = app.listen(3003, function () {
    let host = server.address().address
    let port = server.address().port
    // Starting the Server at the port 3000
})