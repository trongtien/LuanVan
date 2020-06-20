const express = require('express')
const router = express.Router()

let initAPI = (app) => {
    
    
    return app.use('/', router)
}

module.exports = initAPI

