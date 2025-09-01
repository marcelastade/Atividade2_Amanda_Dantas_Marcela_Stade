const mongoose = require('mongoose')

const registroAtendimentoSchema = new mongoose.Schema({
    ticketId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tickets', 
        required: true
    },
    texto: { 
        type: String,
        required: true,
        trim: true
    },
    atendenteId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Atendentes', 
        required: true
    },
    motivos: [{ 
        type: String,
        required: true,
        trim: true
    }],
});

module.exports = mongoose.model('RegistrosAtendimento', registroAtendimentoSchema);
