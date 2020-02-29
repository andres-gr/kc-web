import faker from 'faker'
import router from 'Routes/router'
import { Project } from 'Utils/types'
import apis from 'Utils/swaggerApis'

/**
 * @swagger
 * tags:
 *  name: Projects
 *  description: Project management
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      Project:
 *        type: object
 *        required:
 *          - author
 *          - company
 *          - id
 *        properties:
 *          id:
 *            type: string
 *          company:
 *            type: string
 *          author:
 *            type: string
 *        example:
 *          id: 10dksfa01
 *          company: Funhaus LLC
 *          author: Jon Smiff
 */

/**
 * @swagger
 * path:
 *  /project:
 *    get:
 *      description: Get a random project
 *      summary: Get a random project
 *      tags: [Projects]
 *      responses:
 *        '200':
 *          description: A random project object
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Project'
 */
router.get('/project', async (_req, res) => {
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

apis.push('./src/routes/project.ts')
