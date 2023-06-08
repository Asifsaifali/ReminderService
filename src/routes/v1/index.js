const express=require('express');
const router=express.Router();
const TicketController=require('../../controller/ticket-controller')

router.post('/tickets',TicketController.createNotification)

module.exports=router;