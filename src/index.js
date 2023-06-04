const express=require('express');
const app=express();
const bodyparser=require('body-parser')
const { PORT } = require('./config/serverConfig')

const setUpServer=()=>{
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}))
    app.listen(PORT,()=>{
        console.log(`Server is running at ${PORT}`)
    })
}

setUpServer();