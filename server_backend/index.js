const express = require("express")

const cors = require("cors")    //  Communicate between frontend and backend

const mongoose = require("mongoose")  // for connecting to mongodb

const userRoute = require("./Routes/userRoute")  // for using userRoute

const app = express()       // create express app
require('dotenv').config()  // for using env variables

app.use(express.json())     // for using json data
app.use(cors())             // for using cors
app.use("/api/user", userRoute)  // for using userRoute

app.get("/", (req, res) => {

    res.send("Welcome to Chit Chat App")
})

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;


app.listen(port , (req , res) =>{
    console.log(`Server is running on port::: ${port}`)
})

mongoose.connect(uri , {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB Connected...")
}).catch(err => console.log("MongoDB Connection Error... ", err))