import express from 'express'
import cookieParser from 'cookie-parser';
import sequelize from './db.js';

import * as Models from './models/models.js'

import UserRoute from './routes/user.route.js'
import PostRoute from './routes/post.route.js'

import logs from './helpers/logs.js'

const app = express()
const PORT = 3001;

app.use(express.json())
app.use(express.urlencoded())
app.use(cookieParser())
app.use(logs)

app.use('/api/v1/user', UserRoute)
app.use('/api/v1/post', PostRoute)

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync()
    app.listen(PORT, () => console.log(process.env.LOG_STYLES, `Server run http://localhost:${PORT}/`))
    // open(`http://localhost:${PORT}/`);
  } catch (err) {
    console.log(err);
  }
}
start()

