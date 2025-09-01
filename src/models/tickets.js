const mongoose = require('mongoose')

const ticketsSchema = new mongoose.Schema({
    pessoaId: { 
        type: String,
        required: true,
        trim: true
    },
    titulo: {
        type: String,
        required: true,
        trim: true
    },
    telefone: { 
        type: String,
        required: true,
        trim: true
    },
});

module.exports = mongoose.model('Tickets', ticketsSchema);
