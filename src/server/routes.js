const routes = require('express').Router()

const ProductService = require('../services/product')
const SiteConfigService = require('../services/siteConfig')


// product
routes.get('/product', ProductService.getAll)
routes.get('/product/:id', ProductService.get)
routes.post('/product/', ProductService.add)
routes.delete('/product/:id', ProductService.remove)

// Site (aka company custom config)
routes.get('/site/:id', SiteConfigService.getStylingInfo)


module.exports = routes
