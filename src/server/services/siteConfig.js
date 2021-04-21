const DB = require('../utils/db')

async function getStylingInfo(req, res, next) {
  const config = await DB.get('siteStylings', req.params.companyId)
  res.json(config)
}


/**
 * Ideally this would be used to get all styles for companies
 * to use at load rather than wait for each product
 * @returns 
 */
async function getAllStylingInfo(req, res) {
  res.json(await DB.getAll('siteStylings'))
}

module.exports = {
  getStylingInfo,
  getAllStylingInfo
}
