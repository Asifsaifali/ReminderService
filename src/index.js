const express=require('express');
const app=express();
const bodyparser=require('body-parser')
const { PORT } = require('./config/serverConfig')
//  const {sendBasicEmail}=require('./services/email-service')
const setupJobs=require('./utils/jobs')

const ApiRoute=require('./routes/index')

const setUpServer=()=>{
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}))
    app.use('/api',ApiRoute)
    app.listen(PORT,()=>{
        console.log(`Server is running at ${PORT}`)

        // sendBasicEmail(
        //     'notification@admin.com',
        //     'notification600@gmail.com',
        //     'This is a basic email setup',
        //     'hey how are you, I hope you like this setup'
        // )

        // cron.schedule('*/2 * * * *', () => {
        //     console.log('running a task every two minutes');
        //   });

        setupJobs();
        
    })
}

setUpServer();