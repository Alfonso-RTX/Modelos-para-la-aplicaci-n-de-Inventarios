const mongoose = require('mongoose');

const ubicacionSchema = new mongoose.Schema({
    edificio: { type: String, required: true },
    area: { type: String, required: true },
    departamento: { type: String, required: true },
    direccion: {
        calle: String,
        numero: String,
        colonia: String,
        ciudad: String,
        estado: String,
        codigoPostal: String
    },
    fechaActualizacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Ubicacion', ubicacionSchema);