const nodemailer=require('nodemailer')
const { EMAIL_ADDRESS,EMAIL_PASS}=require('../config/serverConfig')

console.log(EMAIL_ADDRESS,EMAIL_PASS)
const sender=nodemailer.createTransport({
    service:'Gmail',
    auth:{
        user:EMAIL_ADDRESS,
        pass:EMAIL_PASS
    }
   
})

module.exports=sender 