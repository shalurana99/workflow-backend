const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    userName: {
        type: String,
        unique: [true, "User name already taken"],
        required: true
    },
    email: {
        type: String,
        unique: [true, "Account already exist with this email address"],
        lowercase: true,
        trim: true,
        required: true,
        match: [
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "Please enter a valid email"
        ]
    },

    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["ADMIN", "MANAGER", "EMPLOYEE"],
        default: "EMPLOYEE",
        required: true
    }
})

const userModel = mongoose.model("workuser", userSchema);

module.exports = userModel