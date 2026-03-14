import mongoose from 'mongoose'

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Database connected successfully. \n Db Name :- ${conn.connection.name} \n Db Host :- ${conn.connection.host}`)
    } catch (error) {
        console.log(`Database connection error :- `, error.message)
        process.exit(1)
    }
}

export default connectDB