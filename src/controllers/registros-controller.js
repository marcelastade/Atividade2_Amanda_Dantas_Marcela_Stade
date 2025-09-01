const RegistrosRepository = require('../repositories/registros-repository.js')

class RegistroController {
    async getAllRegistros(req, res) {
        try {
            const registro = await RegistrosRepository.findAll();
            res.status(200).json({
                success: true,
                data: RegistrosRepository,
                message: 'Registros de atendimento listados'
            })

        } catch (error) {
            res.status(500).json (
                {
                    success: false,
                    data: RegistrosRepository,
                    message: 'Erro ao buscar os registro de atendimento'
                }
            )
        }
    }

    async getRegistroById (req, res) {
        try {
            const {id} = req.params;
            const registro = await RegistrosRepository.findById(id)

            if(!registro) {
                return res.status(404).json ({
                    success: false,
                    message: "Registro de atendimento não encontrado!"
                })
            }

            res.status(200).json({
                success: true,
                data: registro,
                message: 'Registro de atendimento encontrado!'
            })
            
        } catch {
            res.status(500).json (
                {
                    success: false,
                    message: 'Erro ao buscar os registro de atendimento'
                }
            )
        }
    }

    async createRegistro(req, res) {
        try {
            const RegistroData = req.body
            const newRegistro = await RegistrosRepository.create(RegistroData)
            res.status(201).json({
                success: true,
                data: newRegistro,
                message: 'Registro de atendimento cadastrado com sucesso!'
            })
        } catch (error) {

        }
    }

    async updateRegistro(req, res) {
        try {
            const {id} = req.params
            const registroData = req.body
            const registroUpdated = await RegistrosRepository.update(id, registroData)

            if(!registroUpdated) {
                return res.status(404).json({
                success: false,
                message: 'Registro de atendimento não encontrado!'
            })
        }

        res.status(200).json({
                success: true,
                message: 'Registro de atendimento atualizado com sucesso!'
            })
        
        } catch (error) {

        }
        
    }

    async deleteRegistro(req, res) {
        try {
            const {id} = req.params
            const deleteRegistro = await RegistrosRepository.delete(id)

            if(!deleteRegistro) {
                return res.status(404).json({
                success: false,
                message: 'Registro de atendimento não encontrado!'
            })
        }

        res.status(200).json({
                success: true,
                message: 'Registro de atendimento removido com sucesso!'
            })
        
        } catch (error) {

        }
        
    }
}

module.exports = new RegistroController()