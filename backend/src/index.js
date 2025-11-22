/***************************************
 
File to start the server
to litsen for request at a given port
 
****************************************/

// Imports dotenv module
// to extract environment variables.
import dotenv from "dotenv";
// Import module
// for working with database.
import connectDB from "./config/database.js";
// Imports app module.
import app from "./app.js";


dotenv.config({

    // Path to get the environment variables.
    path: './.env'

});

// Builds async function
//  to starts the server.
const startServer = async () => {

    // Builds exception handling
    // to catch errors.
    try {
        
        console.log("MONGODB_URI:", process.env.MONGODB_URI);
        // Connects to database.
        await connectDB();

        // Builds arrow function
        // to check for errors.
        app.on("error", (error) => {

            // Outputs to the console.
            console.log("Error", error);
            throw error;

        });

        // Builds method
        // to litsen for request at a given port.
        // If port does not work, 
        // it will listen for request at port 8000.
        app.listen(process.env.PORT || 8000, () => {

            // Outputs to the console.
            console.log(`Server is running on port : 
                ${process.env.PORT}`);

        });

    } catch(error) {

        // Outputs to the console.
        console.log("MongoDB connection failed!", err);

    }

}

// Function call.
// Takes no parameters,
// it starts the server.
startServer();