const Ubicacion = require('../models/Ubicacion');

exports.createUbicacion = async (req, res) => {
    const ubicacion = new Ubicacion(req.body);
    await ubicacion.save();
    res.status(201).json(ubicacion);
};

exports.getUbicaciones = async (req, res) => {
    const ubicaciones = await Ubicacion.find();
    res.json(ubicaciones);
};

exports.getUbicacionById = async (req, res) => {
    const ubicacion = await Ubicacion.findById(req.params.id);
    res.json(ubicacion);
};

exports.updateUbicacion = async (req, res) => {
    const ubicacion = await Ubicacion.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(ubicacion);
};

exports.deleteUbicacion = async (req, res) => {
    await Ubicacion.findByIdAndDelete(req.params.id);
    res.json({ message: 'Ubicación eliminada' });
};