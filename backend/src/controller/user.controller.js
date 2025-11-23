/***************************************
 
File to handle the response to the 
request. It handles the request 
for the routes

 ***************************************/

// Imports user module
// in order to register a user.
import { User } from "../models/users.models.js";

// Builds asyn function 
// to register user.
const registerUser = async (req, res) => {

    // Builds exception handling.
    try {

        // What it will ask the user.
        const {username, email, password} = req.body;

        // Steps to register a user.
            // Basic validation
            // Check to seee if user exist.

        // Validates user.
        if(!username || !email || !password) {

            // Returns error 
            // if it cannot validate user.
            return res.status(400).json({ message: " All fields are important!"})

        }

        // Function that checks to see if the user exist in the system.
        const existing = await User.findOne({ email: email.toLowerCase()});

        if (existing) {

            // Returns response if the user already exist.
            return res.status(400).json({ message: "user alreday exists!"});

        }

        // Creates user
        // if everything is correct.
        const user = await User.create({

            username,
            email: email.toLowerCase(),
            password,
            loggedIn: false

        });

        // Returns response 
        // it it has succesfully created an user.
        res.status(201).json({

            message: "User registered",
            User: { id: user._id, email: user.emai, username: user.username}


        });

    } catch (error) {

        // Sends response if it catches an error.
        res.stauts(500).json({ message: "Internal server error", error: error.message});


    }

};

// Exports constant so that 
// it can be used in other files.
export {

    registerUser

};


