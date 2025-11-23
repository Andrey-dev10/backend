/***************************************
 
  File where all request will come in

****************************************/

// Things to DO
  // Build API
  // API To perform CRUD Operation.
  // Authentication API
  // Register API
  // Loggin API
  // Logging out API

  // Structure of An API
    // API's have Routes
    // API's have controllers
    // They have models too. 

  // An important structure of an API is to use the MVC architecture.
    // Using the MVC 
      // Model - Structure of the data that we want on the website.
        // They defined schemas, vesically structures.
      // Controller
        // It is what handles the model with the views.
        // It has routes(endpoints) on the API
        // which handles request between the front-end and 
        // the back end.
        // IT makes sure that data goes fronm 
        // the back end to the front end
      // View
        // Views are the static files.
        // What the user will see.

    
// Imports express module in order to create app.
import express from "express";

// Creates an express app.
const app = express();

// Exports module
// so that it can be used in other files.
export default app;






