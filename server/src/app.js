import express from 'express'
import cors from 'cors'
import logger from "./middlewares/logger.middleware.js"

const app = express()

// Middlewares
app.use(cors())
app.use(logger) 
app.use(express.json())

//Routes

import healthcheckroute from './routes/healthcheck.route.js'
import adminloginroute from './routes/auth.route.js'
import verifyAdmin from './middlewares/auth.middleware.js'

app.use('/api', healthcheckroute)
app.use('/api/admin',adminloginroute)

export default app