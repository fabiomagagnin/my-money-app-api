const express = require('express')

module.exports = function(server) {

    const router = express.Router()
    server.use('/api', router)

    // Rotas ciclo de pgto
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
}