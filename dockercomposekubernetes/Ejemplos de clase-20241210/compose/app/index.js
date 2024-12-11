
const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configuración de la base de datos
const db = mysql.createConnection({
  host: 'db',
  user: 'user',
  password: 'password',
  database: 'testdb',
});
//nos conecta a la db

// Ruta para servir la página principal
//gemera im emdpoint /
app.get('/', (req, res) => {
  db.query('SELECT NOW() AS currentTime', (err, results) => {
    if (err) {
      console.error('Error querying the database:', err);
      return res.status(500).send('Error querying the database');
    }

    const currentTime = results[0].currentTime;
    res.sendFile(path.join(__dirname, 'index.html'));
  });
});

// Ruta para randomizar el nombre
//endpoint /randomize el cual recibe un nombre y lo desordenado de forma aleatoria
app.post('/randomize', (req, res) => {
  const { name } = req.body;
  if (!name || typeof name !== 'string') {
    return res.status(400).send('Invalid name');
  }

  // Ordenar las letras del nombre de forma aleatoria
  const shuffledName = name
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');

  // Consultar la fecha actual desde la base de datos
  db.query('SELECT NOW() AS currentTime', (err, results) => {
    if (err) {
      console.error('Error querying the database:', err);
      return res.status(500).send('Error querying the database');
    }

    const currentTime = results[0].currentTime;
    res.json({ result: shuffledName, currentTime });
  });
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('App running on http://localhost:3000');
});


