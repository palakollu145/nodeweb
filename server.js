'use strict';

const express = require('express');

// Constants
const PORT = 5000;
const HOST = 'localhost';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('<h2 style="color: purple"> Java Home Docker App<h2>');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
