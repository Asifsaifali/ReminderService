const sender=require('../config/emailConfig')

const sendBasicEmail=async(mailFrom,mailTo,mailSub,mailBody)=>{
    try {
       await sender.sendMail({
            from:mailFrom,
            to:mailTo,
            subject:mailSub,
            text:mailBody,
        })
        
    } catch (error) {
        console.log(error)
    }
    
}

module.exports={
    sendBasicEmail
}