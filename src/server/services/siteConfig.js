/* 
id
company id
font styld
text, header, button colors
*/
const DB = require('../utils/db')


async function getStylingInfo(req, res, next) {
  const config = await DB.get('configs', companyId)

  // if not config, return null
  // defaults will be picked up by css on UI

  return config
}


/**
 * Ideally this would be used to get all styles for companies
 * to use at load rather than wait for each product
 * @returns 
 */
async function getAllStylingInfo() {
  return DB.getAll('configs')
}

module.exports = {
  getStylingInfo,
  getAllStylingInfo
}
