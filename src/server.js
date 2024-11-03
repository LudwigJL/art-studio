import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import painterRouter from './routes/painter.js'
import paintingRouter from './routes/painting.js'

const app = express()
app.disable('x-powered-by')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/painter', painterRouter)
app.use('/painting', paintingRouter)

app.get('*', (req, res) => {
  res.status(404).json({
    status: 'failing',
    data: {
      resource: 'Not found'
    }
  })
})

export default app