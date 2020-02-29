import faker from 'faker'
import router from 'Routes/router'
import { User } from 'Utils/types'
import apis from 'Utils/swaggerApis'

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: User management
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      User:
 *        type: object
 *        required:
 *          - email
 *          - id
 *          - name
 *        properties:
 *          id:
 *            type: string
 *          name:
 *            type: string
 *          email:
 *            type: string
 *            format: email
 *            description: Email for the user, is unique.
 *        example:
 *          id: 1234adfas
 *          name: John Smiff
 *          email: jon@smiff.com
 */

/**
 * @swagger
 * path:
 *   /user:
 *    get:
 *      description: Get a random user info
 *      summary: Get a random user info
 *      tags: [Users]
 *      responses:
 *        '200':
 *          description: A random user object
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/User'
 */
router.get('/user', async (_req, res) => {
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

apis.push('./src/routes/user.ts')
