const tickets = require('../models/tickets');
const Tickets = require('../models/tickets') 

class TicketsRepository{
async findAll(){
    return await Tickets.find({active:true});
}

//buscar por id
async findById(id){
    return await Tickets.findById(id)
}

//criar
async create (ticketData){
    const ticket = new Tickets (ticketData)
    return await ticket.save();
}

//update
async update(id,ticketData){
    return await Tickets.findByIdAndUpdate(
        id,
        ticketData
    )
}

//delete
async delete (id){
    return await Tickets.findByIdAndUpdate
(
    id,
    {active:false}
)

}

}

module.exports = new TicketsRepository();