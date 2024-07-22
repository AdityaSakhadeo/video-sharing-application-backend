
import { app } from "./app.js";
import connectDB from "./db/db.js";
import dotenv from 'dotenv';

dotenv.config({path:'./env'});


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running on ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("Mongo DB connected failed!!",error);
})


















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

