const Persona = require('../models/Persona');

exports.createPersona = async (req, res) => {
    const persona = new Persona(req.body);
    await persona.save();
    res.status(201).json(persona);
};

exports.getPersonas = async (req, res) => {
    const personas = await Persona.find();
    res.json(personas);
};

exports.getPersonaById = async (req, res) => {
    const persona = await Persona.findById(req.params.id);
    res.json(persona);
};

exports.updatePersona = async (req, res) => {
    const persona = await Persona.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(persona);
};

exports.deletePersona = async (req, res) => {
    await Persona.findByIdAndDelete(req.params.id);
    res.json({ message: 'Persona eliminada' });
};