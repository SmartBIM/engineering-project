const express = require('express')
const routes = require('./api/routes')

const port = process.env.HTTP_SERVER_PORT || 8080
const app = express()
app.use(routes)
app.use(express.static('public'))

// simple logging route
app.use((req, res, next) => {

  // ideally pino logging
  console.log('A new request received at ' + Date.now())
  next()
})


app.listen(port, () => console.log(`Started on ${port}`))
