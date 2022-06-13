const express = require('express')
const testarBD = require('../controllers/testdata')
const router = express.Router()
router.use(express.json())

router.get('/testdata', testarBD.testarBD);


module.exports = router;