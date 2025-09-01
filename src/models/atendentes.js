const mongoose = require('mongoose')

const atendenteSchema = new mongoose.Schema({
    pessoaId: { 
        type: String,
        required: true,
        trim: true
    },
    departamentoId: { 
        type: String,
        required: true,
        trim: true
    },
    setorId: { 
        type: String,
        required: true,
        trim: true
    },
});

module.exports = mongoose.model('Atendentes', atendenteSchema);