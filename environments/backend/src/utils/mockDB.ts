import faker from 'faker'
import {
  User,
  UserPasswords,
} from 'Api/models'

const USERS: User[] = [
  {
    email  : faker.internet.email(),
    id     : 'user_id_1',
    image  : faker.image.avatar(),
    name   : faker.name.findName(),
    places : 1,
  },
]

const USER_PASSWORDS: UserPasswords = {}

export {
  USER_PASSWORDS,
  USERS,
}
