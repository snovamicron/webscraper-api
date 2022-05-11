const mongoose = require("mongoose")
require('dotenv').config()

const URI = "mongodb://localhost:27017/scrapeData"

const connectToDatabase = async () => {
    try {
        await mongoose.connect(URI)
        console.log("database connected successfully")
    } catch (error) {
        console.log("getting error while connecting to database error "+error)
    }
}

module.exports = connectToDatabase