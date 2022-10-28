const {logEvents} = require('./logger')

const errorHandle = (err, req, res, next) => {
    logEvents(`${err.name}: ${err.message}\t${req.method}\t4{req.url}\t${req.headers.origin}`, 'errLog.log')
    console.log(err.stack)

    const status = res.statusCode ? res.statusCode : 500 // server error

    res.status(status)
    res.json({message: err.message})
}

module.exports = errorHandle