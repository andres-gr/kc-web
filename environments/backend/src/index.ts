import 'Startup/env'
import express from 'express'
import cors from 'cors'
import path from 'path'
import Chance from 'chance'

interface User {
  email: string
  id: string
  name: string
}

interface Project {
  author: string
  company: string
  id: string
}

const chance = new Chance()

const PORT = process.env.PORT!
const isProd = process.env.NODE_ENV === 'production'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

if (isProd) {
  app.use('/', express.static(path.resolve(__dirname, '../dist')))
}

app.get('/user', async (_req, res) => {
  const result = await new Promise<User>(resolve => {
    setTimeout(() => {
      resolve({
        email : chance.email(),
        id    : chance.guid(),
        name  : chance.name(),
      })
    }, 1500)
  })
  res
    .status(200)
    .json({ ...result })
    .end()
})

app.get('/project', async (_req, res) => {
  const result = await new Promise<Project>(resolve => {
    setTimeout(() => {
      resolve({
        author  : chance.name(),
        company : chance.company(),
        id      : chance.guid(),
      })
    }, 1200)
  })
  res
    .status(200)
    .json({ ...result })
    .end()
})

app.listen(
  PORT,
  () => {
    console.log(`\nServer listening on port: ${PORT}\n`)
  },
)
