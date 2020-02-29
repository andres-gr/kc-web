import path from 'path'
import {
  serve,
  setup,
} from 'swagger-ui-express'
import yaml from 'yamljs'
import router from 'Routes/router'

const specs = yaml.load(path.resolve(__dirname, '../api-v1.yaml'))

router.use('/docs', serve)

router.get('/docs', setup(
  specs,
  {
    explorer: true,
  },
))

router.get('/api-docs', (_req, res) => {
  res.setHeader(
    'Content-Type',
    'application/yaml',
  )

  res
    .send(specs)
    .end()
})