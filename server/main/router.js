const router = require('express').Router();

router.get('/hello', (req, res) => {
  res.json('Hello there! Concora');
});

module.exports = router;