import express from 'express'
import cors from 'cors'
import logger from "./middlewares/logger.middleware.js"

const app = express()

// Middlewares
app.use(cors())
app.use(logger) 

//Routes

import healthcheckroute from './routes/healthcheck.route.js'

app.use('/api', healthcheckroute)

export default app