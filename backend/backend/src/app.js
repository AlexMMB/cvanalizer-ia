// backend/src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const cvRoutes = require('./routes/cvRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());  // Para poder leer JSON en el cuerpo de la solicitud

// Rutas
app.use('/api/cv', cvRoutes);  // Usa las rutas para el análisis de CVs

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
