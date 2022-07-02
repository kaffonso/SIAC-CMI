const express = require('express');
const routes = require('./routes')
const bodyParser = require("body-parser");
const cors = require('cors')


const PORT = 3333;
const app = express();

app.use(cors({
  origin: '*'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes)

app.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT}`);
});

