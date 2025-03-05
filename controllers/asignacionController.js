const Asignacion = require('../models/Asignacion');

exports.createAsignacion = async (req, res) => {
    const asignacion = new Asignacion(req.body);
    await asignacion.save();
    res.status(201).json(asignacion);
};

exports.getAsignaciones = async (req, res) => {
    const asignaciones = await Asignacion.find().populate('persona').populate('articulo');
    res.json(asignaciones);
};

exports.getAsignacionById = async (req, res) => {
    const asignacion = await Asignacion.findById(req.params.id).populate('persona').populate('articulo');
    res.json(asignacion);
};

exports.updateAsignacion = async (req, res) => {
    const asignacion = await Asignacion.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(asignacion);
};

exports.deleteAsignacion = async (req, res) => {
    await Asignacion.findByIdAndDelete(req.params.id);
    res.json({ message: 'Asignación eliminada' });
};