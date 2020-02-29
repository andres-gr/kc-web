import {
  serve,
  setup,
} from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import router from 'Routes/router'
import apis from 'Utils/swaggerApis'

const port = process.env.PORT

const options: swaggerJSDoc.Options = {
  apis,
  definition: {
    info: {
      description : 'Test project for API documentation and codegen',
      title       : 'KC Web backend API',
      version     : '1.0.0',
    },
    openapi : '3.0.0',
    servers : [
      {
        url: `http://localhost:${port}/api/v1`,
      },
    ],
  },
}

const specs = swaggerJSDoc(options)

router.use('/docs', serve)

router.get('/docs', setup(
  specs,
  {
    explorer: true,
  },
))
