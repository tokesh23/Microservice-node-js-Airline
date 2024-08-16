const express = require("express");
const bodyparser = require("body-parser");
const { PORT } = require("./config/serverConfig");

 

const apiRoutes = require("./routes/index");

const app = express();

const prepaerAndstartServer = () => {
    app.use(bodyparser.urlencoded({ extended: true }));
    app.use(bodyparser.json())
    

    app.use('/api', apiRoutes)

    app.listen(PORT, () => {
        console.log(`server started on PORT:${PORT}`)
    })
}

prepaerAndstartServer();