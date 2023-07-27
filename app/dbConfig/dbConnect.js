import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.DB_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        const connection = mongoose.connection

        connection.on('error', (err) => {
            console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
            process.exit();
        })

        connection.on('connected', () => {
            console.log('MongoDB connected successfully');
        })
    }
    catch(error){
        console.log(error)
    }
}

export default connectDB