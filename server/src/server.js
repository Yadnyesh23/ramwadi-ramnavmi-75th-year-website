import dotenv from 'dotenv'
import app from './app.js'
import connectDB from './config/connectDB.js'
dotenv.config()

const port = process.env.PORT || 5000

function startserver(){
    try {
        connectDB()
        app.listen(port, ()=>{
        console.log(`Server listening on port http://localhost:${port}`)
    })
    } catch (error) {
        console.log("Error Message :- ", error.message)
    }
}

startserver()