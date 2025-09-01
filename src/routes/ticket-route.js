
const express = require('express')
const router = express.Router()
const TicketController = require('../controllers/tickets-controller.js')

router.get('/', TicketController.getAllTickets)
router.get('/:id',TicketController.getTicketById)
router.post('/', TicketController.createTicket)
router.put('/:id', TicketController.updateTicket)
router.delete('/:id', TicketController.deleteTicket)
module.exports = router
