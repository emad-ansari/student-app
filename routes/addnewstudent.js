const express = require('express')

const router = express.Router()
const addStudentController = require('../controllers/addnewstudent')


router.get('/', addStudentController.getHomePage)
router.post('/createStudent', addStudentController.createStudent)
router.delete('/deleteStudent', addStudentController.deleteStudent)




module.exports = router