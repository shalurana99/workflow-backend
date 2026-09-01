//create server 
require("dotenv").config();
const app = require("./app");
const mongodbConection = require("./config/db");

async function serverStart() {
    try{
        await mongodbConection();

        app.listen(3000, ()=>{
            console.log("Server is start on port number 3000");
        })
    }
    catch(error)
    {
        console.log("Server faild to start");
    }

}

serverStart();