const mongoose = require('mongoose');
require('dotenv').config();

const connectToDb = () => {};
mongoose
  .connect(process.env.MONOG_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    dbName: 'intelistyle',
  })
  .then(() => {
    console.log('Connected to DB 👍 ✔');
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = connectToDb;
