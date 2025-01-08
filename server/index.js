require("dotenv").config();
const express = require("express")
const cors = require("cors")

const app = express()

// Port
const port = process.env.PORT || 4000

// DB connection
require("./db/connection")

// Require Routes
const workoutRoutes = require("./routes/workoutRoutes")
const userRoutes = require("./routes/userRoutes")



// MiddleWare
app.use(express.json())

app.use(cors())

// app.get("/",(req,res)=>{
//     res.send("hello!")
// })

// Routes
app.use("/api/workouts", workoutRoutes)
app.use("/api/user", userRoutes)

app.listen(port,()=>{
    console.log(`server is running at PORT : ${port} `);
    
})