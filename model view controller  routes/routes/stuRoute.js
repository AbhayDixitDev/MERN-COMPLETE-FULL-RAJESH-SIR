const express = require ("express")
const router = express.Router()
const stuController = require ("../controller/stuController")

router.post("/datasave",stuController.datasave)

module.exports = router