const mongoose = require("mongoose");

async function mongodbConection() {
    try {
        await mongoose.connect(process.env.DBURL);
        console.log("MongoDB is connected");
    } catch (error) {
        console.log("MongoDB connection failed:", error.message);
        throw error;
    }
}

module.exports = mongodbConection;