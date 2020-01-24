import Axios from 'axios'
import { ZustandActions } from 'Utils/types'
import delay from 'Utils/delay'
import { UserState } from './state'

export interface UserActions<S = Partial<UserState>> {
  setUser: (user: S) => (void | Promise<void>)
  fetchUser: (...args: any) => Promise<void>
}

const userActions: ZustandActions<UserState> = set => ({
  fetchUser: async () => {
    const { data } = await Axios.get<UserState>('http://localhost:4000/user')
    set(state => {
      state.email = data.email
      state.id = data.id
      state.name = data.name
    })
  },
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
