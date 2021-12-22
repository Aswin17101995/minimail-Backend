const express = require("express")
const router = express.Router()

let homecontrol = require('../controller/homecontroller')

router.post('/register',homecontrol.home)
router.post('/signin',homecontrol.signin)
router.post('/email',homecontrol.email)
router.get("/",homecontrol.hello)
router.post('/inbox',homecontrol.inbox )
module.exports = router