
import mongoose from "mongoose";
import dotenv from "dotenv";

export const dbConnection = () => {
 
  mongoose.connect(process.env.MONGO_URI, {
      dbName: "RESERVATIONS", useNewUrlParser: true, useUnifiedTopology: true }
      
      )
    
    .then(() => {
      console.log("Connected to database!");
      
    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database: ${err}`);
    });
};
