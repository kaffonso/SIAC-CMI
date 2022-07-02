const express = require("express");
const routes = express.Router();
const UserController = require("../controllers/UserController");
const StudentController = require("../controllers/StudentController");
const CourseController = require("../controllers/CourseController");
const AddressController = require("../controllers/AddressController");
const EmployeeController = require("../controllers/EmployeeController");
const CandidateController = require("../controllers/CandidateController");
const ClassController = require("../controllers/ClassController");
const CandidatureController = require("../controllers/CandidatureController");
const RegistrationController = require("../controllers/RegistrationController");

routes.get("/api/users", UserController.read);
routes.get("/api/students", StudentController.read);
routes.get("/api/students/info", StudentController.read_full);
routes.get("/api/employees", EmployeeController.read);
routes.get("/api/addresses", AddressController.read);
routes.get("/api/courses", CourseController.read);
routes.get("/api/candidates", CandidateController.read);
routes.get("/api/classes", ClassController.read);
routes.get("/api/candidatures", CandidatureController.read);
routes.get("/api/candidatures/info", CandidatureController.read_full);
routes.get("/api/registrations", RegistrationController.read);
routes.get("/api/registrations/info", RegistrationController.read_full);


routes.post("/api/users", UserController.store);
routes.post("/api/students", StudentController.store);
routes.post("/api/candidates", CandidateController.store);
routes.post("/api/employees", EmployeeController.store);
routes.post("/api/courses", CourseController.store);
routes.post("/api/addresses", AddressController.store);
routes.post("/api/classes", ClassController.store);
routes.post("/api/candidatures", CandidatureController.store);
routes.post("/api/registrations", RegistrationController.store);


module.exports = routes;
