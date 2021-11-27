const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectionDB = require('./config/db');
const path = require('path');
const productRoute = require('./view/garments');
const app = express();

app.use(cors());
app.use('/', productRoute);
//serve static asset in production
if (process.env.NODE_ENV === 'production') {
  console.log('env',process.env.NODE_ENV)
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
} else {
  //dev enviroments
  console.log('env',process.env.NODE_ENV)
  app.use('/', (req, res) => {
    res.status(200).send('server is running');
  });
}

connectionDB();
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is up & running on port ${port} 🚀🚀🚀🚀`);
});
