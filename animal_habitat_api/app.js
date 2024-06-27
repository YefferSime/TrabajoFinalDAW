const express = require('express');
const bodyParser = require('body-parser');
const animalRoutes = require('./routes/animalRoutes');
const habitatRoutes = require('./routes/habitatRoutes');
const cors = require('cors'); // Mueve esta línea más arriba

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Habilitar CORS antes de las rutas
app.use(cors());

app.use('/api', animalRoutes);
app.use('/api', habitatRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
