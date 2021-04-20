const express = require('express')


const app = express()

app.use(express.static('public'))

// simple logging route
app.use((req, res, next) => {

  // ideally pino logging
  console.log('A new request received at ' + Date.now())
  next()
})







const port = process.env.HTTP_SERVER_PORT || 8080

app.listen(port, () => console.log(`Started on ${port}`))
