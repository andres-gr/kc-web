import ZustandStoreCreator from 'Api/store'
import userActions, { UserActions } from './actions'
import userState, { UserState } from './state'
import { USER_STORE } from './types'

class UserStore extends ZustandStoreCreator<UserState, UserActions> {
  constructor () {
    super(
      {
        actions : userActions,
        name    : USER_STORE,
        state   : userState,
      },
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
