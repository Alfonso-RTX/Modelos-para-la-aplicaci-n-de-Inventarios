const mongoose = require('mongoose');

const articuloSchema = new mongoose.Schema({
    tipo: { type: String, enum: ['Mobiliario de oficina', 'Equipo de cómputo', 'Otros'], required: true },
    nombre: { type: String, required: true },
    descripcion: String,
    estado: { type: String, enum: ['Sin determinar', 'Malo', 'Regular', 'Bueno', 'Excelente'], default: 'Sin determinar' },
    ubicacion: { type: mongoose.Schema.Types.ObjectId, ref: 'Ubicacion' },
    fechaActualizacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Articulo', articuloSchema);