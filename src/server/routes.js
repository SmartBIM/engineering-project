const routes = require('express').Router()

const ProductService = require('./services/product')
const SiteConfigService = require('./services/siteConfig')


// product
routes.get('/api/product', ProductService.getAll)
routes.get('/api/product/:id', ProductService.get)
routes.post('/api/product/', ProductService.add)
routes.delete('/api/product/:id', ProductService.remove)

// Site (aka company custom config)
routes.get('/api/site/:id', SiteConfigService.getStylingInfo)


module.exports = routes
