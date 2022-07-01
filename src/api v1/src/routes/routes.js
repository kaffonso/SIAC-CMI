const express = require('express')
const pool = require('../Config/database')
const studentsController = require('../controller/StudentsController')
const userController = require('../controller/UserController')
const candidaturaController = require("../controller/CandidateController")

const cors = require('cors');

routes = express.Router()

routes.get('/api/students',cors(),studentsController.index)
routes.get('/api/candidatura',cors(),candidaturaController.index)
routes.post('/api/candidatura',cors(),candidaturaController.store)


routes.get('/api/user',userController.index)




module.exports = routes