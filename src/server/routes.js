const routes = require('express').Router()

const ProductService = require('./services/product')
const SiteConfigService = require('./services/siteConfig')


// product
routes.get('/api/products', ProductService.getAll)
routes.get('/api/products/:id', ProductService.get)

// Site (aka company custom config)
routes.get('/api/siteStylings', SiteConfigService.getAllStylingInfo)


module.exports = routes
