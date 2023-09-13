const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')


let studentdatabase = require('../database/studentdata')

// below is databse path which is required in writing file and reading file
const dataBaseFilePath = path.join(__dirname, '../database/studentdatabase.json')


if (fs.existsSync(dataBaseFilePath)){
    // if file path exits then
    // 1) first read the file 
    // 2) and then asssign all the itmes of databse to student array
    const fileData = fs.readFileSync(dataBaseFilePath, 'utf-8')
    studentdatabase = JSON.parse(fileData)

}


module.exports = {
    getHomePage: (req, res)=> {
        res.sendFile(path.join(__dirname, '../views/addstudent.html'))
    },

    createStudent: async (req, res)=> {
        try{
          
            const newStudentData = req.body;
            studentdatabase.push(newStudentData)
            // update the studentDataBase json file 
            const formattData =  JSON.stringify(studentdatabase, null, 2)
            fs.writeFileSync(dataBaseFilePath, formattData)
            res.status(200).send('Student data received');

        }
        catch(err){
            res.status(400).send('Error! in adding new student ')
        }
    },

    deleteStudent: async (req, res) => {
        try {
            const studentRoll = req.body.student_roll;
            
            // filter out all the student which have rollno not equal to studentRoll
            const updatedStudent = studentdatabase.filter((student)=> student.roll !== studentRoll)
            
            // rewrite the studentdatabase.json with updatedstudent
           
            fs.writeFileSync(dataBaseFilePath, JSON.stringify(updatedStudent, null, 2))
            
            res.status(200).send("student deleted successfully")
        }
        catch(err){
            res.status(400).send(`ERROR!! ${err}`)
        }

    }

   
}