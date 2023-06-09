const Router = require('express')
const router = new Router()
const orderController = require('../controllers/orderController')

router.get('/', orderController.getAll)
router.get('/latest', orderController.latestOrders)

module.exports = router
