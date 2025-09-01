const AtendentesRepository = require('../repositories/atendentes-repository.js')

class AtendenteController {
    async getAllAtendentes(req, res) {
        try {
            const atendente = await AtendentesRepository.findAll();
            res.status(200).json({
                success: true,
                data: AtendentesRepository,
                message: 'Atendentes listados'
            })

        } catch (error) {
            res.status(500).json (
                {
                    success: false,
                    data: AtendentesRepository,
                    message: 'Erro ao buscar os atendentes'
                }
            )
        }
    }

    async getAtendenteById (req, res) {
        try {
            const {id} = req.params;
            const atendente = await AtendentesRepository.findById(id)

            if(!atendente) {
                return res.status(404).json ({
                    success: false,
                    message: "Atendente não encontrado!"
                })
            }

            res.status(200).json({
                success: true,
                data: atendente,
                message: 'Atendente encontrado!'
            })
            
        } catch {
            res.status(500).json (
                {
                    success: false,
                    message: 'Erro ao buscar os Atendentes'
                }
            )
        }
    }

    async createAtendente(req, res) {
        try {
            const AtendenteData = req.body
            const newAtendente = await AtendentesRepository.create(AtendenteData)
            res.status(201).json({
                success: true,
                data: newAtendente,
                message: 'Atendente cadastrado com sucesso!'
            })
        } catch (error) {

        }
    }

    async updateAtendente(req, res) {
        try {
            const {id} = req.params
            const atendenteData = req.body
            const atendenteUpdated = await AtendentesRepository.update(id, atendenteData)

            if(!atendenteUpdated) {
                return res.status(404).json({
                success: false,
                message: 'Atendente não encontrado!'
            })
        }

        res.status(200).json({
                success: true,
                message: 'Atendente atualizado com sucesso!'
            })
        
        } catch (error) {

        }
        
    }

    async deleteAtendente(req, res) {
        try {
            const {id} = req.params
            const deleteAtendente = await AtendentesRepository.delete(id)

            if(!deleteAtendente) {
                return res.status(404).json({
                success: false,
                message: 'Atendente não encontrado!'
            })
        }

        res.status(200).json({
                success: true,
                message: 'Atendente removido com sucesso!'
            })
        
        } catch (error) {

        }
        
    }
}

module.exports = new AtendenteController()