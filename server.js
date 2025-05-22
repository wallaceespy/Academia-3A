const express = require('express');
const app = express();
const port = 3000;

// Servir os arquivos estáticos (HTML, CSS, JS)
app.use(express.static('public')); // renomeie sua pasta do site para "public"

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
