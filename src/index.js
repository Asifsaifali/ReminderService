const express=require('express');
const app=express();
const bodyparser=require('body-parser')
const { PORT } = require('./config/serverConfig')
const setupJobs=require('./utils/jobs')

const ApiRoute=require('./routes/index')

const setUpServer=async()=>{
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}))
    app.use('/api',ApiRoute)
    app.listen(PORT,()=>{
        console.log(`Server is running at ${PORT}`)

        setupJobs();
        
    })
}

setUpServer();