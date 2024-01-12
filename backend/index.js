const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const comicRouter = require('./routes/comics')

app.use(cors())
app.use('/', comicRouter)


app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`)
})