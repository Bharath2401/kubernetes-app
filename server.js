'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});


app.get('/shop', (req, res) => {
  res.send('Service name: shop');
});

app.get('/checkout', (req, res) => {
  res.send('Service name: checkout');
});

app.get('/payment', (req, res) => {
  res.send('Service name: payment');
});

app.get('/cart', (req, res) => {
  res.send('Service name: cart');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});


