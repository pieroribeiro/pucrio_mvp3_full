const express = require('express')
const app = express()
app.use(express.json())
const helmet = require('helmet')
app.use(helmet())
const cors = require('cors')
app.use(cors())

const middleware = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "*")
    res.header("Access-Control-Allow-Headers", "*")

    next()
}

app.use('/', middleware, require('./router'))

module.exports = app
