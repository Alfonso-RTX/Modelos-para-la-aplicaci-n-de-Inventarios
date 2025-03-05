const express = require('express');
const mongoose = require('./db');
const app = express();

app.use(express.json());

app.use('/api/articulos', require('./routes/articuloRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));