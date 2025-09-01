
const express = require('express')
const router = express.Router()
const AtendenteController = require('../controllers/atendentes-controller.js')

router.get('/', AtendenteController.getAllAtendentes)
router.get('/:id',AtendenteController.getAtendenteById)
router.post('/', AtendenteController.createAtendente)
router.put('/:id', AtendenteController.updateAtendente)
router.delete('/:id', AtendenteController.deleteAtendente)
module.exports = router
