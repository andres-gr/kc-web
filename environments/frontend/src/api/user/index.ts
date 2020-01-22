import ZustandMiddlewareCreator from 'Api/middleware'
import userActions from './actions'
import userState, { UserState } from './state'

class UserStore extends ZustandMiddlewareCreator<UserState> {
  constructor () {
    super(
      userActions,
      userState,
    )
  }
}

const userStore = new UserStore()

const [
  useUserStore,
  userApi,
] = userStore.createStore()

export {
  userApi,
  useUserStore,
}
