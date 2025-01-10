const express = require("express");
const { addStudent, getStudent } = require("../controllers/addStudent.js");

const router = express.Router();

router.post("/addStudent",addStudent)
router.get("/all",getStudent)


module.exports = router