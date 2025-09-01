const TicketsRepository = require('../repositories/tickets-repository.js')

class TicketController {
    async getAllTickets(req, res) {
        try {
            const ticket = await TicketsRepository.findAll();
            res.status(200).json({
                success: true,
                data: TicketsRepository,
                message: 'Tickets listados'
            })

        } catch (error) {
            res.status(500).json (
                {
                    success: false,
                    data: TicketsRepository,
                    message: 'Erro ao buscar os tickets'
                }
            )
        }
    }

    async getTicketById (req, res) {
        try {
            const {id} = req.params;
            const ticket = await TicketsRepository.findById(id)

            if(!ticket) {
                return res.status(404).json ({
                    success: false,
                    message: "Ticket não encontrado!"
                })
            }

            res.status(200).json({
                success: true,
                data: ticket,
                message: 'Ticket encontrado!'
            })
            
        } catch {
            res.status(500).json (
                {
                    success: false,
                    message: 'Erro ao buscar os tickets'
                }
            )
        }
    }

    async createTicket(req, res) {
        try {
            const ticketData = req.body
            const newTicket = await TicketsRepository.create(ticketData)
            res.status(201).json({
                success: true,
                data: newTicket,
                message: 'Ticket criado com sucesso!'
            })
        } catch (error) {

        }
    }

    async updateTicket(req, res) {
        try {
            const {id} = req.params
            const ticketData = req.body
            const ticketUpdated = await TicketsRepository.update(id, ticketData)

            if(!ticketUpdated) {
                return res.status(404).json({
                success: false,
                message: 'Ticket não encontrado!'
            })
        }

        res.status(200).json({
                success: true,
                message: 'Atualizado com sucesso!'
            })
        
        } catch (error) {

        }
        
    }

    async deleteTicket(req, res) {
        try {
            const {id} = req.params
            const deleteTicket = await TicketsRepository.delete(id)

            if(!deleteTicket) {
                return res.status(404).json({
                success: false,
                message: 'Ticket não encontrado!'
            })
        }

        res.status(200).json({
                success: true,
                message: 'Ticket removido com sucesso!'
            })
        
        } catch (error) {

        }
        
    }
}

module.exports = new TicketController()