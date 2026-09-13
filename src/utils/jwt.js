const jsonwebtoken = require("jsonwebtoken");

function generateToken(userId) {
    const token = jsonwebtoken.sign(

        { userId },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN }
    )
    return token;
} 

module.exports = generateToken
