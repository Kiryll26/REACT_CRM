const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/signup', userController.signup)
router.post('/signin', userController.signin)
router.get('/auth', authMiddleware, userController.auth)

module.exports = router
