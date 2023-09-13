// fetch the student details from serrver
console.log("Hello")

async function fetchData(){
    const inputName = document.querySelector('input').value;
    const url = `/getStudent/api/${inputName}`;
   
    try{
        const res = await fetch(url);
        const data = await res.json();
       
        (inputName === 'all' || inputName === 'All')? showAllStudent(data) : showOneStudent(data)
         
    }catch(err){
        console.log(`Something went wrong ${err}`);
    } 

}

const myBtn = document.getElementById('searchBtn');
myBtn.addEventListener('click', fetchData);
const showAllStudent = (data)=> {
    const container = document.querySelector('.student-data');
   
    for(let i = 0; i < data.length; i++){
        // here I have to create four div for each iteration and append it in container
        const Roll = document.createElement('div');
        const Name = document.createElement('div');
        const Age = document.createElement('div');
        const College = document.createElement('div');

        // insert the information to these created div
        Roll.innerText = data[i].roll;
        Name.innerText = data[i].name;
        Age.innerText = data[i].age;
        College.innerText = data[i].college
        // append these all four div into container
        container.append(Roll, Name, Age, College);
    }
    
}

const showOneStudent = (data)=>{
    const container = document.querySelector('.student-data');
    const Roll = document.createElement('div');
    const Name = document.createElement('div');
    const Age = document.createElement('div');
    const College = document.createElement('div');
    console.log(data.roll)
    Roll.innerText = data.roll;
    Name.innerText = data.name;
    Age.innerText = data.age;
    College.innerText = data.college
    container.append(Roll, Name, Age, College);

}



// delete
const openPopup = document.getElementById('delete');

openPopup.addEventListener('click', deletePopup)
function deletePopup(){
    const deleteContainer = document.getElementById('delete-popup');
    deleteContainer.style.display = 'block';
}


const closeBtn = document.getElementById('cross-btn');
closeBtn.addEventListener('click', closeDeletePopup);

function closeDeletePopup() {
    const deleteContainer = document.getElementById('delete-popup');
    deleteContainer.style.display = 'none';
}


const deleteBtn = document.getElementById('delete-btn');
deleteBtn.addEventListener('click', deleteStudent);

async function deleteStudent() {
    const student_roll = document.getElementById('roll-input').value;
    const url = '/Student/deleteStudent';
    try {
        const res = await fetch(url, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({student_roll})
        })
        if (res.ok){
            alert('student delete successfully');
        }
        else {
            alert(res.status);
        }
      
    }catch(err){
        console.log(`Error!! ${err}`);
    }

}


