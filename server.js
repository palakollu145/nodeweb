'use strict';

const express = require('express');

// Constants
const PORT = 5000;

// App
const app = express();
app.get('/', (req, res) => {
  res.send("<body style='background-color:blue;' ><h1 style='color:white;'>Hello Before</h1></body>");
});

app.listen(PORT);
console.log(`Running`);
