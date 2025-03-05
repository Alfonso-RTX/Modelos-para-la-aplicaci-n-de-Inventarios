const mongoose = require('mongoose');

const personaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellidoPaterno: { type: String, required: true },
    apellidoMaterno: { type: String, required: true },
    puesto: String,
    mediosContacto: [{ tipo: String, valor: String }],
    fechaActualizacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Persona', personaSchema);