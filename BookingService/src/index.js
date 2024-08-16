const express= require("express")

const bodyParser =require('body-parser')



const { PORT } = require("./config/Config-Server");

const app= express();

const SetUpAndStartSever=()=>{
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))

    // app.use('/api',apiRoutes)

    app.listen(PORT,()=>{
        console.log(`server started  on port: ${PORT}`);
        
    })
}

SetUpAndStartSever()