// backend/src/routes/cvRoutes.js
const express = require('express');
const router = express.Router();
const { analyzeCV } = require('../ai');  // Importa la función de ai.js

// Ruta para procesar el CV
router.post('/analyze', async (req, res) => {
  const { cvText } = req.body;  // Asumiendo que envías el texto del CV en el cuerpo de la solicitud

  if (!cvText) {
    return res.status(400).json({ message: 'El texto del CV es necesario.' });
  }

  try {
    const analysis = await analyzeCV(cvText);  // Llama a la función que interactúa con la API de OpenAI
    res.status(200).json({ suggestions: analysis });  // Devuelve las sugerencias del análisis
  } catch (error) {
    res.status(500).json({ message: 'Error al analizar el CV.', error });
  }
});

module.exports = router;
