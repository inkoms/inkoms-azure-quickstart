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
      pool.query('SELECT * FROM "user"', (err, result) => {
        if (err) {
          console.error('Error executing query', err.stack);
          res.status(500).send('Error fetching users from database');
        } else {
          let users = result.rows.map((user) => {
            return `<li>${user.full_name}, ${user.age}</li>`;
          });

          // Combining both responses
          res.send(`
            <h1>Hello Inkoms! Connected to database at: ${
              result.rows[0].now
            }</h1>
            <h2>Users:</h2>
            <ul>${users.join('')}</ul>
          `);
        }
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
