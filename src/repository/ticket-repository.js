const {NotificationTickets}=require('../models/index')

class TicketRepository{
    

    async create(data){
        try {
            const ticket=await NotificationTickets.create(data)
            return ticket
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports=TicketRepository;