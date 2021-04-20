// this is fake for use with this thing
// ideally would use a mongo docker image
// with some docker-compose

// add a seed here on load
const { v4: uuidv4 } = require('uuid')
const DATABASE = {}


async function get(collection, id) {
  const c = DATABASE[collection] || {}
  return c[id] || null
}


async function add(collection, data) {
  const id = uuidv4()
  DATABASE[collection][id] = data
}


async function getAll(collection) {
  return Object.freeze({...DATABASE[collection]})
}

function seed() {
  // load json file into DATABASE
  // to give some examples
}


module.exports = {
  add,
  get,
  getAll
}
