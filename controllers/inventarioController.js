const Inventario = require('../models/Inventario');

exports.createInventario = async (req, res) => {
    const inventario = new Inventario(req.body);
    await inventario.save();
    res.status(201).json(inventario);
};

exports.getInventarios = async (req, res) => {
    const inventarios = await Inventario.find();
    res.json(inventarios);
};

exports.getInventarioById = async (req, res) => {
    const inventario = await Inventario.findById(req.params.id);
    res.json(inventario);
};

exports.updateInventario = async (req, res) => {
    const inventario = await Inventario.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(inventario);
};

exports.deleteInventario = async (req, res) => {
    await Inventario.findByIdAndDelete(req.params.id);
    res.json({ message: 'Inventario eliminado' });
};