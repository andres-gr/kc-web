import { ZustandActions } from 'Utils/types'
import { UserState } from './state'

const userActions: ZustandActions<UserState> = set => ({
  setUser: (user: UserState) => set(state => {
    state.email = user.email
    state.name = user.name
    state.id = Math.random()
  }, 'Set User'),
})

export default userActions
