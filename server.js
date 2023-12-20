const express = require('express');
const path = require('path');
const app = express();

// Middleware para servir archivos estáticos desde la carpeta 'build'
app.use(express.static(path.join(__dirname, 'build')));

// Middleware para manejar todas las solicitudes y enrutarlas a 'index.html'
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Puerto en el que el servidor escuchará
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
