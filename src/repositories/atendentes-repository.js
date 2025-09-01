const atendentes = require('../models/atendentes');
const Atendentes = require('../models/atendentes') 

class AtendentesRepository{
async findAll(){
    return await Atendentes.find({active:true});
}

//buscar por id
async findById(id){
    return await Atendentes.findById(id)
}

//criar
async create (atendenteData){
    const atendente = new Atendentes (atendenteData)
    return await atendente.save();
}

//update
async update(id,atendenteData){
    return await Atendentes.findByIdAndUpdate(
        id,
        atendenteData
    )
}

//delete
async delete (id){
    return await Atendentes.findByIdAndUpdate
(
    id,
    {active:false}
)

}

}

module.exports = new AtendentesRepository();