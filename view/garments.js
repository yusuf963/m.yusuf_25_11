const express = require('express');
const route = express.Router();
const Product = require('../model/product_schema');

//return all products
route.get('/api/v1/garments', async (req, res) => {
  // const redis = require('redis');
  // redisUrl = 'redis://127.0.0.1:6379';
  // const client = redis.createClient(redisUrl);
  // const util = require('util');
  // can be used to flush the redis cache at any time to clear the cache and start fresh
  // client.flushall();
  // client.get = util.promisify(client.get);
  // const cacheGarments = await client.get('/api/v1/garments');
  // if (cacheGarments) {
  //   console.log('cache hit');
  //   return res.send(JSON.parse(cacheGarments));
  // }
  console.log('cache miss');
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const offset = (page - 1) * limit;
  const query = {};
  const sort = {};
  try {
    const count = await Product.countDocuments(query);
    const totalPages = Math.ceil(count / limit);
    const garments = await Product.find(query)
      .select(
        '-images -product_description -url -images -position -product_imgs_src -source -product_categories_mapped -currency_code'
      )
      .skip(offset)
      .limit(limit)
      .sort(sort);
    const response = {
      garments: garments,
      total: count,
      totalPages: totalPages,
      page: page,
      limit: limit,
    };
    res.send(response);
    // client.set('/api/v1/garments', JSON.stringify(response));
  } catch (error) {
    res.status(500).json({
      err: true,
      msg: 'something went wrong plase try again later',
      error: error,
    });
  }
});

// return garments based on category
route.get('/api/v1/garments/:product_categories', async (req, res) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const product_categories = req.params.product_categories;
  console.log(product_categories);
  console.log('category hit');

  const offset = (page - 1) * limit;
  const query = {
    product_categories: req.params.product_categories,
  };
  const sort = {};
  try {
    const count = await Product.countDocuments(query);
    const totalPages = Math.ceil(count / limit);
    const garments = await Product.find(query)
      .select(
        '-images -product_description -url -images -position -product_imgs_src -source -product_categories_mapped -currency_code'
      )
      .skip(offset)
      .limit(limit)
      .sort(sort);
    const response = {
      garments: garments,
      total: count,
      totalPages: totalPages,
      page: page,
      limit: limit,
    };
    res.send(response);
  } catch (error) {
    res.status(500).json({
      err: true,
      msg: 'something went wrong plase try again later',
      error: error,
    });
  }
});

module.exports = route;
