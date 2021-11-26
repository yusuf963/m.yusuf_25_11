const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectionDB = require('./config/db');
const path = require('path');
const productRoute = require('./view/garments');
// require('dotenv/config');
const app = express();

app.use(cors());
app.use('/', productRoute);
//serve static asset in production
if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


// dev enviroments
app.use('/', (req, res) => {
  res.status(200).send('server is running');
});
connectionDB();
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('server is up & running 🚀🚀🚀🚀');
});
