import express from 'express'
import cors from 'cors'

const PORT = process.env.PORT || 4000

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', async (_req, res) => {
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
