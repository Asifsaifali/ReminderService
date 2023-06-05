const express=require('express');
const app=express();
const bodyparser=require('body-parser')
const { PORT } = require('./config/serverConfig')
 const {sendBasicEmail}=require('./services/email-service')
const setUpServer=()=>{
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}))
    app.listen(PORT,()=>{
        console.log(`Server is running at ${PORT}`)

        sendBasicEmail(
            'notification@admin.com',
            'notification600@gmail.com',
            'This is a basic email setup',
            'hey how are you, I hope you like this setup'
        )
        
    })
}

setUpServer();