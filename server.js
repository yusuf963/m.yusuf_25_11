const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectionDB = require('./config/db');
const productRoute = require('./view/garments');
// require('dotenv/config');
const app = express();

app.use(cors());
app.use('/', productRoute);
app.use('/', (req, res) => {
  res.status(200).send('server is running');
});
connectionDB();
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('server is up & running 🚀🚀🚀🚀');
});
