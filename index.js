// app.js

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Conexão com o MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '29092022BIA',
  database: 'neotelas'
});

connection.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    return;
  }
  console.log('Conexão com o MySQL estabelecida');
});

// Middleware para analisar corpos de solicitações
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rotas
app.use('/api/cadastrar-predio', require('./routes/cadastrarPredio'));
app.use('/api/procurar-predios', require('./routes/procurarPredios'));

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
