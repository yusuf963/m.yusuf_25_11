const mongoose = require('mongoose');
const product = require('./product_schema');
const connectionDB = require('../config/db');
const data = require('./data');

const seedDatabase = async () => {
  try {
    await connectionDB();
    console.log('🤖 Database connected!');
    // await mongoose.connection.db.dropDatabase();
    // console.log('🤖 Database was dropped!');
    const products = await product.create(data);
    console.log(`🤖 ${products.length} products created!`);
    await mongoose.connection.close();
    console.log('🤖 Goodbye!');
  } catch (err) {
    console.log('🤖 Something went wrong with seeding!');
    console.log(err);
    await mongoose.connection.close();
    console.log('🤖 Goodbye!');
  }
};

seedDatabase();
