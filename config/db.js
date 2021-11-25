const mongoose = require('mongoose');

const connectToDb = () => {};
mongoose
  .connect(
    'mongodb+srv://yusuf:goldisston@cluster0.oeg40.mongodb.net/intelistyle?retryWrites=true&w=majority',
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      dbName: 'intelistyle',
    }
  )
  .then(() => {
    console.log('Connected to DB');
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = connectToDb;