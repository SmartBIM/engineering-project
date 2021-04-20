
/**
 * product data obj
 * 
 * id
 * other info (meta?)
 * resources (urls to links)
 * company id
 * 
 */

const DB = require('../utils/db')

const DB_COLLECTION_NAME = 'products'

async function get(req, res, next) {
  const product = await DB.get(DB_COLLECTION_NAME, req.params.id)
  res.json(product)
}

async function getAll(_, res) {
  const allProducts = await DB.getAll(DB_COLLECTION_NAME)
  res.json(allProducts)
}

async function add(req, res, next) {

}

async function remove(req, res, next) {
  // do delete
  res.send(200)
}

module.exports = {
  get, 
  getAll, 
  add, 
  remove
}
