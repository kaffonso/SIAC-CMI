


const express = require('express')
const routes = require('./routes/routes')
const app = express()

app.use(express.json())
var cors = require('cors')

//app.use(cors());
app.use(cors({
    origin: '*'
}));
// app.use(function(req, res, next) {

//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Content-Type");
//     res.header("Access-Control-Allow-Methods", "OPTIONS,POST,GET");

//     next();
//     });
// const { createProxyMiddleware } = require('http-proxy-middleware');
// app.use('/api', createProxyMiddleware({ 
//     target: 'http://localhost:3000/', //original url
//     changeOrigin: true, 
//     //secure: false,
//     onProxyRes: function (proxyRes, req, res) {
//        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    
//     }
// }));

const bodyParser = require('body-parser')
app.use(bodyParser.json())


app.use(bodyParser.urlencoded({extended:false}))

//Routes
app.use(routes)


PORT = 3001
app.listen(PORT,()=>{
    console.log(`Server listening on localhost:${PORT}`)
})