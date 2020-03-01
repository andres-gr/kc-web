import faker from 'faker'
import router from 'Routes/router'
import { User } from 'Api/models'

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
