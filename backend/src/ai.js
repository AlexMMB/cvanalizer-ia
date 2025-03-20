// backend/src/ai.js
const axios = require('axios');

const OPENAI_API_KEY = 'your-api-key';  // Reemplaza con tu clave de API de OpenAI

const openAIClient = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Authorization': `Bearer ${OPENAI_API_KEY}`,
    'Content-Type': 'application/json',
  },
});

// Función para analizar un CV
async function analyzeCV(cvText) {
  try {
    const response = await openAIClient.post('/completions', {
      model: 'text-davinci-003', // Puedes cambiar el modelo según lo que necesites
      prompt: `Analiza este CV y sugiere mejoras: ${cvText}`,
      max_tokens: 500,
    });
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error al analizar el CV:', error);
    throw error;
  }
}

module.exports = {
  analyzeCV,
};
