import { ZustandActions } from 'Utils/types'
import delay from 'Utils/delay'
import { UserState } from './state'

export interface UserActions<S = Partial<UserState>> {
  setUser: (user: S) => void
}

const userActions: ZustandActions<UserState> = set => ({
  setUser: async (user: UserState) => {
    await delay(500)
    set(state => {
      state.email = user.email
      state.name = user.name
      state.id = user.id
    }, 'Set User')
  },
})

export default userActions
