const express = require('express')
const app = express()
const path = require('path')
const {logger} = require('./custom/logger')
const errorHandle = require('./custom/errorHandle')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const PORT = process.env.PORT || 3500

app.use(logger)

app.use(cors())

app.use(express.json())

app.use(cookieParser())

app.use('/', express.static(path.join(__dirname, '/public')))

app.use('/', require('./routes/root'))

app.use(errorHandle)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
