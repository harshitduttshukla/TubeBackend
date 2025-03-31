import mongoose from "mongoose"
import {DB_NAME} from "../constants.js";

const connectDB = async () => {
    try {
        const connetionIntance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB conncet !! DB HOST : 
            ${connetionIntance.connection.host}`);
        
    } catch (error) {
        console.log("MONGODB connection error111",error);
        process.exit();
    }
}

export default connectDB;