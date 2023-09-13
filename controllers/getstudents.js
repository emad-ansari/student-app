const studentdatabase = require('../database/studentdatabase.json')
const findStudent = require('../public/js/searchStudent')



module.exports = {
    getStudentDetails: (req, res)=> {
        let studentName = req.params.name;
        // make the first character to uppercase
        studentName = studentName.charAt(0).toUpperCase() + studentName.slice(1);
     
        if (studentName === 'All'){
            // respond with all student 
            res.status(200).json(studentdatabase)
        }
        else {
            // respond for a asking student
            
            const studentObject = findStudent(studentName)

            res.status(200).json(studentObject)
        }

    }
}