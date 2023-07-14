import express from 'express'
import ListRoute from './routes/list.js'
import cookieParser from 'cookie-parser';

const app = express()
const PORT = 3001;

app.use(express.json())
app.use(express.urlencoded())
app.use(cookieParser())
app.use((req, res, next) => {
  console.log(`${req.method} — ${req.url}`)
  next()
})

app.use('/api/v1/list', ListRoute)

app.listen(PORT, () => console.log('\x1b[1m\x1b[32m%s\x1b[0m', `Server run http://localhost:${PORT}/`))
