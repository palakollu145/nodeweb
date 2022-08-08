'use strict';

const express = require('express');

// Constants
const PORT = 5000;


// App
const app = express();
app.get('/', (req, res) => {
  res.send(view.html);
});

app.listen(PORT);
console.log(`Running on :${PORT}`);
