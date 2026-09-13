const {userRegister, userLogin} = require("../services/auth.services");

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

async function login(req,res) {
    try{
        const {email, password} = req.body;

        const user = await userLogin({
            email,
            password,
        });
        res.status(200).json({
            message:"User Login Successfully",
            user
        });
    }
    catch(error){
        res.status(400).json({
            message:error.message
        })
    }
}

module.exports={
    register,
    login
};