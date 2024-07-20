import connectDB from "./db/db.js";
import dotenv from 'dotenv';

dotenv.config({path:'./env'});


connectDB();


















//Commented code is one of the apporoach to write the database connection and express code in the same page
//but here we are using the another method



/*
import express from 'express'
const app = express();

(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERR: ",error);
            throw error;
        })

        app.listen(process.env.PORT,(error)=>{
            console.log(`App is listening on ${process.env.PORT}`)
        })
    } catch (error) {
      console.log("Error:",error);
      throw error;
    }
})
*/

