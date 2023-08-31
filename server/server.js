const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const connectDB = require('./config/db');
const cors = require('cors') ///Module for linking the backend to the frontend
const multer = require('multer')
dotenv.config({path: './config/config.env'})

const app = express()
const PORT = process.env.PORT || 8000

//middleware for backend-frontend connectivity
app.use(cors({
    origin: "http://localhost:3000", //URL of the react App
    credentials: true
  }))
  
//body and json parser
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//

app.use("/images" ,express.static(path.join(__dirname, "/images")))
//connect db
connectDB()





//Post regsiter route
app.use('/api', require('./routes/user'))

//new post
app.use('/api', require('./routes/tweet'))

//route to Upload images
const storage = multer.diskStorage({
  destination: (req, file, cb) =>{
    cb(null, "images")
  },
  filename: (req,file, cb)=>{
    cb(null, req.body.name)
  }
})

const upload = multer({storage:storage})
app.post('/uploads', upload.single('file'), (req, res)=>{
  res.status(200).json('Image Has Been Uploaded')
})

app.listen(PORT, ()=>console.log(`Server started on port: ${PORT}`))