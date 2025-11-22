/*******************************************
 
File to connect back-end to the database.

********************************************/

// File to start the server.

// imports mongoose module
// in order to work with MongoDB database,
// this module allows the server to communicate with MongoDB.
import mongoose from "mongoose";

// Builds async function
// Database connection.
const connectDB = async () => {

    // Builds execption handling
    // to catch errors.
    try {

        // Builds connection instance.
        const connectionInstance = await mongoose.connect
        (`${process.env.MONGODB_URI}`)
        // Outputs to the console.
        console.log(`\n MongoDB connected !!!!
            ${connectionInstance.connection.host}`);

    } catch (error) {

        // Outputs to the console.
        console.log("MongoDB connection failed", error);
        // When process is finished,
        // it moves to the task.
        process.exit(1)

    }

}

// Exports module
// so that it can be used in other files.
export default connectDB;