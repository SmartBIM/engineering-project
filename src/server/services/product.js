const DB = require('../utils/db')

const DB_COLLECTION_NAME = 'products'

async function get(req, res) {
  const product = await DB.get(DB_COLLECTION_NAME, req.params.id)
  res.json(product)
}

async function getAll(_, res) {
  const allProducts = await DB.getAll(DB_COLLECTION_NAME)
  res.json(allProducts)
}

module.exports = {
  get, 
  getAll
}
