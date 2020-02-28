import 'Startup/env'
import cors from 'cors'
import express from 'express'
import faker from 'faker'
import path from 'path'

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
        email : faker.internet.email().toLowerCase(),
        id    : faker.random.uuid(),
        name  : faker.name.findName(),
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
        author  : faker.name.findName(),
        company : faker.company.companyName(),
        id      : faker.random.uuid(),
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
