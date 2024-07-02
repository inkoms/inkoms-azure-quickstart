const express = require('express');
const app = express();
const port = 3000;

// Ruta principal que responde con "Hello World!"
app.get('/', (req, res) => {
  res.send('Hello Inkoms!');
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
