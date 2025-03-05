const mongoose = require('mongoose');

const inventarioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    fechas: [Date],
    responsable: { type: String, required: true },
    fechaRegistro: { type: Date, default: Date.now },
    estado: { type: String, enum: ['Activa', 'Inactiva'], default: 'Activa' }
});

module.exports = mongoose.model('Inventario', inventarioSchema);