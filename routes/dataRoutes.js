const express = require("express")
const router = express.Router()

// controller
const { setData } = require("../controller/dataController")

// middleware
const fatchData = require("../middleware/fatchData")

router.route('/data').get( fatchData, setData)

module.exports = router