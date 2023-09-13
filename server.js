const express  = require('express')
const app = express();
const PORT = 4000
const path = require('path')
const bodyParser = require('body-parser')
const homeRoutes = require('./routes/home')
const StudentRoutes = require('./routes/addnewstudent')
const getStudentRoutes = require('./routes/getstudent')


// bodyparser parse is the library of express.js and it have alot of function. In which json() function is used to parse the JSON data of req.body 
// only use below code inside server.js
app.use(bodyParser.json())




//serving all static file 
app.use(express.static('public'))
app.use('/public', express.static(path.join(__dirname, '/public')))



// main routes
app.use('/', homeRoutes)
app.use('/getStudent', getStudentRoutes)

app.use('/Student', StudentRoutes)


app.listen(PORT, ()=> {
    console.log(`server is running on port ${PORT}`)
})