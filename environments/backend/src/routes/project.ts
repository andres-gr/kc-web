import faker from 'faker'
import router from 'Routes/router'
import { Project } from 'Api/models'

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
