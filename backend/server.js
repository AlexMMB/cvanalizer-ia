const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 5000;

// Configurar el almacenamiento de archivos con multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.post('/upload-cv', upload.single('cv'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  res.send('File uploaded successfully.');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
