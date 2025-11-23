/*****************************************
 
Model for Users

****************************************/

// Imports Mongoose model in order to communicate
// with MongoDB.
    // Schema means structure.
import mongoose, { Schema} from "mongoose";

// Buils user Schema(structure)
const userSchema = new Schema(

    {

        username: {

            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true, 
            minLength: 1,
            maxLength: 30

        },

        password: {

            type: String,
            required: true,
            minLength: 6,
            maxLength: 50

        },

        email: {

            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true, 


        }

    },

    {
        timestamps: true

    }

)

// Exports user Model
// So that it can be used in other files.
export const User = mongoose.model("User", userSchema);


