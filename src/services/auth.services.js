const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const generateToken = require("../utils/jwt")

async function userRegister({userName, email, password, role}) {
    
    const existingUser = await userModel.findOne({email});

    if(existingUser){
        throw new Error("User already exists with this email address");
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await userModel.create({
        userName,
        email,
        password:hashPassword,
        role,
    });
    newUser.password =undefined;
    return newUser;

}

async function userLogin({email, password}) {
    
    const user = await userModel.findOne({email});

    if(!user){
        throw new Error("Invalid email and password")
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch){
        throw new Error("Invalid email and password");
    }

    const token = generateToken(user._id);

    user.password = undefined;

    return {
        user,
        token
    }
}

module.exports = {
    userRegister,
    userLogin
};