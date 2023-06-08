const EmailService=require('../services/email-service')

const service=new EmailService();

    const createNotification=async(req,res)=>{
         try {
            const ticket=await service.createNotification(req.body)
         return res.status(201).json({
            message:"Successfully created a ticket",
            success:true,
            data:ticket,
            err:{}
         })
         } catch (error) {
            return res.status(500).json({
                message:"Unable to create a ticket",
                success:false,
                data:{},
                err:error
            })
         }

    }

    module.exports={
        createNotification,
    }
