
const express = require('express');
const mysql = require('mysql2');
//vamos a usar express, sirve para generar endpoints, un api rest chiquito
const app = express();
const port = 3000;
//el puerto que vamos a usar es el 3000

// Configuración de la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'billing',
});
//creamos la conexion a la base de datos

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    process.exit(1);
  }
  console.log('Connected to database');
});

// Ruta para obtener todos los clientes
app.get('/clients', (req, res) => {
  //hacemos un endpoint llamado clients
  db.query('SELECT * FROM clients', (err, results) => {
    //el endpoin hace una query a la base de datos
    if (err) {
      res.status(500).send('Error querying database');
    } else {
      res.json(results);
      //esta serealizando la respuesta en formato json
    }
  });
});


// Ruta para obtener las facturas de un cliente específico
app.get('/invoices/:clientId', (req, res) => {
//endpoint para obtener las facturas de un cliente
  const clientId = req.params.clientId;
  db.query(
    'SELECT * FROM invoices WHERE client_id = ?',
    //hacemos una query a la base de datos
    [clientId],
    (err, results) => {
      if (err) {
        res.status(500).send('Error querying database');
      } else {
        res.json(results);
      }
    }
  );
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  //iniciamos el servidor
});

//miremos ahora el schema.sql