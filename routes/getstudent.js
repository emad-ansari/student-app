const express = require('express')
const router = express.Router()
const getStudentController = require('../controllers/getstudents')


router.get('/api/:name', getStudentController.getStudentDetails)

module.exports = router