const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  product_categories_mapped: {
    type: Array,
  },
  product_id: {
    type: Number,
    unique: true,
    required: true,
  },
  url: {
    type: String,
  },
  gender: {
    type: String,
    required: true,
  },
  product_description: {
    type: String,
    required: true,
  },
  image_urls: {
    type: Array,
  },
  product_imgs_src: {
    type: Array,
  },
  source: {
    type: String,
  },
  product_categories: {
    type: Array,
  },
  images: {
    type: Array,
  },
  position: {
    type: Array,
  },
  product_title: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  currency_code: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
