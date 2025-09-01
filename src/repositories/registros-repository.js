const registros = require('../models/registrosAtendimento');
const Registros = require('../models/registrosAtendimento') 

class RegistrosRepository{
async findAll(){
    return await Registros.find({active:true});
}

//buscar por id
async findById(id){
    return await Registros.findById(id)
}

//criar
async create (registroData){
    const registro = new Registros (registroData)
    return await registro.save();
}

//update
async update(id,registroData){
    return await Registros.findByIdAndUpdate(
        id,
        registroData
    )
}

//delete
async delete (id){
    return await Registros.findByIdAndUpdate
(
    id,
    {active:false}
)

}

}

module.exports = new RegistrosRepository();