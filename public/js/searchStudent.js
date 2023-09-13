let studentArray = require('../../database/studentdata')
const fs = require('fs');

const studentDataBasePath = './database/studentdatabase.json'



if (fs.existsSync(studentDataBasePath)) {
    // If file exist then first read the file and get the data back and store it into fileData variable
    // here read file function takes few arguments
    // 1) path of file (where file is located)
    // 2) encoding
    let allStudent = fs.readFileSync(studentDataBasePath,'utf-8' )
    // Putting all the student from data base to student array so that I can travell through the array and can find the asking student
    studentArray = JSON.parse(allStudent)

}

 // below function will find that whether  aparticular student lies in database or not
const isStudentMatch = (studentName)=> {
    let studentData = null;
    studentArray.forEach((student)=> {
    
        if (student.name === studentName){

            studentData = student
        }
       
    });

    const unknownStudent = {
        name: "unknown",
        age: 0,
        college: "unknown",
        roll: 0
    };
    return (studentData)? studentData : unknownStudent;
}

module.exports = isStudentMatch