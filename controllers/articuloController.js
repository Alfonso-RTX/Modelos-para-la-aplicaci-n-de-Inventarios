const Articulo = require('../models/Articulo');

exports.createArticulo = async (req, res) => {
    try {
        const articulo = new Articulo(req.body);
        await articulo.save();
        res.status(201).json(articulo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getArticulos = async (req, res) => {
    const articulos = await Articulo.find().populate('ubicacion');
    res.json(articulos);
};

exports.getArticuloById = async (req, res) => {
    const articulo = await Articulo.findById(req.params.id).populate('ubicacion');
    res.json(articulo);
};

exports.updateArticulo = async (req, res) => {
    const articulo = await Articulo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(articulo);
};

exports.deleteArticulo = async (req, res) => {
    await Articulo.findByIdAndDelete(req.params.id);
    res.json({ message: 'Artículo eliminado' });
};