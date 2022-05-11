const express = require("express")
const cors = require('cors')
const connectToDatabase = require("./database/connectToDatabase")
require('dotenv').config({ path: './config/config.env'})

// routes
const dataRouter = require("./routes/dataRoutes")

const PORT = 4000
const app = express()
app.use(express.json())
app.use(cors())
connectToDatabase()

app.use('/api/v1',dataRouter)

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`)
})

