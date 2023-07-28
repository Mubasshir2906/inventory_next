import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
        mongoose.connect(process.env.DB_URL)
        console.log("trying to connect DB")
        const connection = mongoose.connection
        connection.on('connected', () => {
            console.log('MongoDB connected successfully');
        })
        connection.on('error', (err) => {
            console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
            process.exit();
        })
    }    
    catch(error){
        console.log("Something is wrong")
        console.log(error)
    }
}

export default connectDB