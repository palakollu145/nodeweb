'use strict';

const express = require('express');

// Constants
const PORT = 5000;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('<h2 style="color: purple"> Java Home Docker App<h2>');
});

app.listen(PORT);
console.log(`Running`);
