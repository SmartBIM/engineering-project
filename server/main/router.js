const router = require('express').Router();
const products = require('../database/Products');
const siteCongigs = require('../database/SiteConfigs');

//get all products
router.get('/products', (req, res) => {
  res.json(products);
});

//get product by id
router.get('/products/:id', (req, res) => {
  const found = products.some(
    (product) => product.id === Number(req.params.id)
  );

  if (found) {
    res.json(
      products.filter((product) => product.id === Number(req.params.id))
    );
  } else {
    res.sendStatus(400);
  };
});

//get all site configs
router.get('/site-configs', (req, res) => {
  res.json(siteCongigs);
});

module.exports = router;
