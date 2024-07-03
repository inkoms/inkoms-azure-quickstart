const express = require('express');
const { pool } = require('./db');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  pool.query('SELECT NOW()', (err, result) => {
    if (err) {
      console.error('Error executing query', err.stack);
      res.status(500).send('Error connecting to database');
    } else {
      res.send(`Hello Inkoms! Connected to database at: ${result.rows[0].now}`);
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
