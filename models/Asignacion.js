const mongoose = require('mongoose');

const asignacionSchema = new mongoose.Schema({
    persona: { type: mongoose.Schema.Types.ObjectId, ref: 'Persona', required: true },
    articulo: { type: mongoose.Schema.Types.ObjectId, ref: 'Articulo', required: true },
    observacion: String,
    estado: { type: String, enum: ['Activa', 'Inactiva'], default: 'Activa' },
    fechaInicio: { type: Date, required: true },
    fechaFin: Date,
    usuarioAsignador: { type: String, required: true }
});

module.exports = mongoose.model('Asignacion', asignacionSchema);