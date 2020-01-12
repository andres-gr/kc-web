import express from 'express'
import cors from 'cors'
import path from 'path'

const PORT = process.env.PORT || 4000
const isProd = process.env.NODE_ENV === 'production'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

if (isProd) {
  app.use('/', express.static(path.resolve(__dirname, '../dist')))
}

app.get('/api', async (_req, res) => {
  const result = await new Promise<boolean>(resolve => {
    setTimeout(() => {
      resolve(true)
    }, 1500)
  })
  res
    .status(200)
    .json({ result })
    .end()
})

app.listen(
  PORT,
  () => {
    console.log(`Server started at port: ${PORT}`)
  },
)
