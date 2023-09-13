
// Creating new student in database

const createstudent = async (e)=> {
    e.preventDefault(); 
    console.log('function fire')
    const Rollno = document.getElementById('student-roll').value;
    const Name = document.getElementById('student-name').value;
    const Age = document.getElementById('student-age').value;
    const College = document.getElementById('student-college').value;
    const url = `/Student/createStudent`;

    const studentData = {
        name: Name,
        age: Age,
        roll: Rollno,
        college: College
    };

    console.log('this is inside the client side java script',studentData)

    try {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(studentData)
        });
        if (res.ok){
            alert('details send successfully')
            console.log('Student data sent successfully');
        }
        else {
            console.error('Error in sending student data');
        }


    }catch(err){
        console.log(`ERROR! ${err}`);
    }

}
const addBtn = document.getElementById('submit-button')
addBtn.addEventListener('click', createstudent);

