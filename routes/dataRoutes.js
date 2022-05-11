const express = require("express")
const router = express.Router()

// controller
const { setData } = require("../controller/dataController")

// middleware
const fatchData = require("../middleware/fatchData")

router.route('/data').post( fatchData,setData)

module.exports = router