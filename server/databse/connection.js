import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config();

const connection = async ()=> {

    const url = "mongodb+srv://heykiranthakur:wbVPJy6ipV0ZwmSc@clusterlibrarymanagemen.bmuily3.mongodb.net/?retryWrites=true&w=majority&appName=ClusterlibraryManagement";
    try{
      await mongoose.connect(url);
      console.log("database connection established")
    } catch(err){
        console.log(`error while connecting to databse ${err.message}`)
    }

}
export default connection;