const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");

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

module.exports = {
    userRegister
};