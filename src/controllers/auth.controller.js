const {userRegister} = require("../services/auth.services");

async function register(req, res) {
    try{
        const {userName, email, password, role} = req.body;

        const user = await userRegister({
            userName,
            email,
            password,
            role
        });
        res.status(202).json({
            message:"User register successfully",
            user
        });
    }
    catch(error){
        res.status(400).json({
            message:error.message,
        });
    }
}

module.exports={
    register
};